import Papa from "papaparse";
import { Dialog } from "quasar";
import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";

export const app = reactive({
  values: null,
  csv: "",
  selected: {
    id: uuidv4(),
    NRPATRIMONIO1: "",
    DESCRICAO: "",
    LOCALIZAÇÃO: "",
    ESTADO: "",
    OBSERVAÇÃO: "",
    SITUAÇÃO: "",
    UPDATED: "",
  },
  selects: [],
  fields: [],
  colunas: [
    { field: "NRPATRIMONIO1", label: "NPAT", align: "left" },
    { field: "DESCRICAO", label: "Descrição", align: "left" },
    { field: "LOCALIZAÇÃO", label: "Local", align: "left" },
    { field: "ESTADO", label: "Estado", align: "left" },
    { field: "OBSERVAÇÃO", label: "Observação", align: "left" },
    { field: "SITUAÇÃO", label: "Situação", align: "left" },
  ],
});

export const selectedCreate = () => {};

export const selectedReset = () => {
  app.selected.id = uuidv4();
  app.selected.NRPATRIMONIO1 = "";
  app.selected.DESCRICAO = "";
  app.selected.LOCALIZAÇÃO = "";
  app.selected.ESTADO = "";
  app.selected.OBSERVAÇÃO = "";
  app.selected.UPDATED = "";
};

export const saveItemSelected = () => {
  const item = Object.fromEntries(app.fields.map((key) => [key, ""]));
  Object.assign(item, JSON.parse(JSON.stringify(app.selected)));

  item.UPDATED = new Date();

  // Item inserido
  const isItemInserted =
    app.selected.NRPATRIMONIO1 &&
    !!app.selects.find((e) => e.NRPATRIMONIO1 === app.selected.NRPATRIMONIO1);
  if (isItemInserted || !item.INSERTED) {
    item.INSERTED = new Date();
  }

  if (item.id) {
    app.selects = app.selects.filter(
      (e) =>
        e.id !== item.id ||
        (item.NRPATRIMONIO1 && e.NRPATRIMONIO1 !== item.NRPATRIMONIO1)
    );
  }
  app.selects.push(item);
  return true;
};

export const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const csvData = e.target.result;
    app.csv = csvData;
    const result = Papa.parse(csvData, {
      header: true,
    });
    app.values = result.data.map((e) =>
      Object.keys(e).reduce(
        (acc, key) => {
          if (key.trim()) acc[key] = e[key];
          return acc;
        },
        { SITUAÇÃO: "", OBSERVAÇÃO: "", UPDATED: "" }
      )
    );

    app.fields = result.meta.fields;
    saveData();
  };
  reader.readAsText(file);
};

export const saveData = () => {
  try {
    localStorage.setItem("data", JSON.stringify(app));
  } catch (error) {
    console.log("erro ao salvar: ", error);
  }
};

export function gerarCSV(data, filename = "data.csv", separator = ";") {
  const csv = [
    Object.keys(data[0]).join(separator),
    ...data.map((row) => Object.values(row).join(separator)),
  ].join("\n");
  const link = Object.assign(document.createElement("a"), {
    href: URL.createObjectURL(new Blob([csv], { type: "text/csv" })),
    download: filename,
  });
  link.click();
}

export const gerarTableRelatorio = () => {
  gerarTableFormate(
    app.selects.map((e) => ({
      NPAT: e["NRPATRIMONIO1"] || "",
      Setor: e["NOME_SETOR"] || "",
      Local: e["LOCALIZAÇÃO"] || "",
      Valor:
        Number(e["VALOR"]).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) || "",
      Estado: e["DESC_ESTADO"] || "",
    }))
  );
};

export const gerarTableTermo = () => {
  gerarTableFormate(
    app.selects.map((e) => ({
      NPAT: e["NRPATRIMONIO1"] || "",
      Descrição: e["DESCRICAO"] || "",
      Local: e["LOCALIZAÇÃO"] || "",
      Setor: e["NOME_SETOR"],
      Estado: e["DESC_ESTADO"] || "",
      Valor:
        Number(e["VALOR"]).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) || "",
    }))
  );
};

export const gerarTable = (data) => {
  const tableHTML = `<table border="1" cellpadding="1" cellspacing="1" style="width:100%;" align="center"><thead><tr>${Object.keys(
    data[0]
  )
    .map((h) => `<th><strong>${h}<strong></th>`)
    .join("")}</tr></thead><tbody>${data
    .map(
      (row) =>
        `<tr>${Object.values(row)
          .map((v) => `<td>${v}</td>`)
          .join("")}</tr>`
    )
    .join("")}</tbody></table>`;
  navigator.clipboard.writeText(tableHTML);
  return tableHTML;
};

export const gerarTableFormate = (data) => {
  const tableHTML = gerarTable(data);
  const tempElement = document.createElement("div");
  tempElement.innerHTML = tableHTML;
  document.body.appendChild(tempElement);
  const range = document.createRange();
  range.selectNodeContents(tempElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  document.body.removeChild(tempElement);
};

export const limparTabela = () => {
  Dialog.create({
    title: "Apagar tudo",
    message: "Deseja apagar todos os registros?",
    ok: "Confirmar",
    cancel: "Cancelar",
    persistent: true,
  })
    .onOk(() => {
      app.selects = [];
      saveData();
      console.log("Apagado...");
    })
    .onCancel(() => {
      console.log(">>>> Cancel");
    })
    .onDismiss(() => {
      console.log("Cancelado");
    });
};

try {
  const storedData = localStorage.getItem("data");
  if (storedData) {
    const dt = JSON.parse(storedData);
    app.csv = dt.csv;
    app.fields = dt.fields || [];
    app.selects =
      dt.selects.map((e) => {
        if (!e.INSERTED) {
          e.INSERTED = new Date();
        }
        return e;
      }) || [];
    app.selected = dt.selected || {};
    app.values = [...(dt.values || [])].map((e) => {
      if (!e.id) e.id = uuidv4();
      return e;
    });
  }
} catch (error) {
  console.log("Erro ao carregar dados localStorage: ", error);
}
