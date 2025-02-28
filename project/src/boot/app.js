import Papa from "papaparse";
import { Dialog } from "quasar";
import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";

export const app = reactive({
  values: null,
  csv: "",
  fileName: "",
  selected: {
    id: uuidv4(),
    NRPATRIMONIO1: "",
    DESCRICAO: "",
    LOCALIZAÇÃO: "",
    ESTADO: "",
    OBSERVAÇÃO: "",
    SITUAÇÃO: "",
    UPDATED: "",
    VALOR: "",
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
    { field: "VALOR", label: "Valor", align: "left" },
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
  app.selected.VALOR = ""; // Resetar campo VALOR
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

export function gerarCSV(data, filename = "", separator = "\t") {
  Dialog.create({
    title: "Salvar CSV",
    message: "Informe o nome do arquivo:",
    prompt: {
      model: filename,
      isValid: (val) => val.length > 0,
      type: "text",
    },
    cancel: true,
    persistent: true,
  }).onOk((name) => {
    const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const fullName = `${datePrefix}-${name}.csv`;

    const headers = [
      "NRPATRIMONIO1",
      "DESCRICAO",
      "LOCALIZAÇÃO",
      "ESTADO",
      "OBSERVAÇÃO",
      "SITUAÇÃO",
    ];

    const values = app.selects.map((e, index) =>
      headers.map((key, i) => (i === 0 ? index + 1 : e[key] || ""))
    );

    const csv = [
      headers.join(separator),
      ...values.map((e) => e.join(separator)),
    ].join("\n");
    const link = Object.assign(document.createElement("a"), {
      href: URL.createObjectURL(new Blob([csv], { type: "text/csv" })),
      download: fullName,
    });
    link.click();
  });
}

export const gerarTableRelatorio = () => {
  Dialog.create({
    title: "Salvar Relatório",
    message: "Informe o nome do arquivo:",
    prompt: {
      model: "relatório",
      isValid: (val) => val.length > 0,
      type: "text",
    },
    cancel: true,
    persistent: true,
  }).onOk((name) => {
    const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const fullName = `${datePrefix}-${name}.html`;

    const data = app.selects.map((e) => ({
      NPAT: e["NRPATRIMONIO1"] || "",
      Descrição: e["DESCRICAO"] || "",
      Local: e["LOCALIZAÇÃO"] || "",
      Valor: e["VALOR"] || "",
      Estado: e["SITUAÇÃO"] || "",
    }));
    console.log("dados selecionados::: ", app.selects);
    const tableHTML = gerarTable(data);
    const htmlWithButton = addCopyButton(tableHTML);
    downloadHTML(htmlWithButton, fullName);
    copyToClipboard(tableHTML);
  });
};

export const gerarTableTermo = () => {
  Dialog.create({
    title: "Salvar Termo",
    message: "Informe o nome do arquivo:",
    prompt: {
      model: "termo",
      isValid: (val) => val.length > 0,
      type: "text",
    },
    cancel: true,
    persistent: true,
  }).onOk((name) => {
    const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const fullName = `${datePrefix}-${name}.html`;

    const data = app.selects.map((e) => ({
      NPAT: e["NRPATRIMONIO1"] || "",
      Descrição: e["DESCRICAO"] || "",
      Local: e["LOCALIZAÇÃO"] || "",
      Estado: e["SITUAÇÃO"] || "",
      Valor: e["VALOR"] || "",
    }));
    const tableHTML = gerarTable(data);
    const htmlWithButton = addCopyButton(tableHTML);
    downloadHTML(htmlWithButton, fullName);
    copyToClipboard(tableHTML);
  });
};

const addCopyButton = (tableHTML) => {
  return `
    <html>
      <body>
        ${tableHTML}
        <button onclick="copyTable()">Copiar Tabela</button>
        <script>
          function copyTable() {
            const table = document.querySelector('table');
            const range = document.createRange();
            range.selectNodeContents(table);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
          }
        </script>
      </body>
    </html>
  `;
};

const downloadHTML = (htmlContent, filename) => {
  const blob = new Blob([htmlContent], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
};

const copyToClipboard = (htmlContent) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlContent;
  document.body.appendChild(tempElement);
  const range = document.createRange();
  range.selectNodeContents(tempElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  document.body.removeChild(tempElement);
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
    app.fileName = dt.fileName || "";
  }
} catch (error) {
  console.log("Erro ao carregar dados localStorage: ", error);
}
