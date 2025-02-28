import Papa from "papaparse";
import { Dialog } from "quasar";
import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";

export const app = reactive({
  values: null,
  csv: "",
  fileName: "",
  session: "",
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
      model: "CSV ",
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

const gerarTableHTML = (sortedSelects) => {
  const groupedData = sortedSelects.reduce((acc, item) => {
    const situacao = item["SITUAÇÃO"] || "REGULAR";
    if (!acc[situacao]) acc[situacao] = [];
    acc[situacao].push(item);
    return acc;
  }, {});

  let htmlContent = "";
  for (const [situacao, items] of Object.entries(groupedData)) {
    htmlContent += `<h3>${situacao}</h3>`;
    const data = items.map((e) => ({
      NPAT: e["NRPATRIMONIO1"] || "",
      Descrição: e["DESCRICAO"] || "",
      Local: e["LOCALIZAÇÃO"] || "",
      Estado: e["SITUAÇÃO"] || "",
      Valor: e["VALOR"] || "",
    }));
    htmlContent += gerarTable(data);
  }
  return htmlContent;
};

const gerarTableDialog = (title, defaultName, callback) => {
  Dialog.create({
    title,
    message: "Informe o nome do arquivo:",
    prompt: {
      model: defaultName,
      isValid: (val) => val.length > 0,
      type: "text",
    },
    cancel: true,
    persistent: true,
  }).onOk(callback);
};

export const gerarTableRelatorio = () => {
  const sortedSelects = [...app.selects].sort((a, b) => {
    const order = ["REGULAR", "SEM PLACA", "SEM REGISTRO", "SEM SITUAÇÃO"];
    const situacaoA = order.indexOf(a["SITUAÇÃO"] || "REGULAR");
    const situacaoB = order.indexOf(b["SITUAÇÃO"] || "REGULAR");
    if (situacaoA !== situacaoB) return situacaoA - situacaoB;
    const numA = Number(a["NRPATRIMONIO1"]) || Infinity;
    const numB = Number(b["NRPATRIMONIO1"]) || Infinity;
    return numA - numB;
  });

  gerarTableDialog("Salvar Relatório", "Relatório ", (name) => {
    const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const fullName = `${datePrefix}-${name}.html`;

    const htmlContent = gerarTableHTML(sortedSelects);
    const htmlWithButton = addCopyButton(htmlContent);
    downloadHTML(htmlWithButton, fullName);
    copyToClipboard(htmlContent);
  });
};

export const gerarTableTermo = () => {
  const sortedSelects = [...app.selects].sort((a, b) => {
    const order = ["REGULAR", "SEM PLACA", "SEM REGISTRO", "SEM SITUAÇÃO"];
    const situacaoA = order.indexOf(a["SITUAÇÃO"] || "REGULAR");
    const situacaoB = order.indexOf(b["SITUAÇÃO"] || "REGULAR");
    if (situacaoA !== situacaoB) return situacaoA - situacaoB;
    const numA = Number(a["NRPATRIMONIO1"]) || Infinity;
    const numB = Number(b["NRPATRIMONIO1"]) || Infinity;
    return numA - numB;
  });

  gerarTableDialog("Salvar Termo", "Termo ", (name) => {
    const datePrefix = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const fullName = `${datePrefix}-${name}.html`;

    const htmlContent = gerarTableHTML(sortedSelects);
    const htmlWithButton = addCopyButton(htmlContent);
    downloadHTML(htmlWithButton, fullName);
    copyToClipboard(htmlContent);
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
    app.session = dt.session || "";
  }
} catch (error) {
  console.log("Erro ao carregar dados localStorage: ", error);
}
