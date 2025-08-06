import Papa from "papaparse";
import { Dialog } from "quasar";
import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";

export const app = reactive({
  values: null,
  csv: "",
  fileName: "",
  session: "",
  // Padronização dos nomes das propriedades para consistência
  selected: {
    id: uuidv4(),
    NRPATRIMONIO1: "",
    DESCRICAO: "",
    LOCALIZACAO: "",
    ESTADO: "",
    OBSERVACAO: "",
    SITUACAO: "",
    UPDATED: "",
    VALOR: "",
  },
  selected_db: {
    id: null,
    NRPATRIMONIO1: "",
    DESCRICAO: "",
    LOCALIZACAO: "",
    ESTADO: "",
    OBSERVACAO: "",
    SITUACAO: "",
    UPDATED: "",
    VALOR: "",
  },
  selects: [],
  fields: [],
  // Padronização das colunas
  colunas: [
    { field: "NRPATRIMONIO1", label: "NPAT", align: "left" },
    { field: "DESCRICAO", label: "Descrição", align: "left" },
    { field: "LOCALIZACAO", label: "Local", align: "left" },
    { field: "ESTADO", label: "Estado", align: "left" },
    { field: "OBSERVACAO", label: "Observação", align: "left" },
    { field: "SITUACAO", label: "Situação", align: "left" },
  ],
});

export const selectedCreate = () => {};

export const selectedReset = () => {
  // Reseta app.selected
  app.selected.id = uuidv4();
  app.selected.NRPATRIMONIO1 = "";
  app.selected.DESCRICAO = "";
  app.selected.LOCALIZACAO = "";
  app.selected.ESTADO = "";
  app.selected.OBSERVACAO = "";
  app.selected.UPDATED = "";
  app.selected.VALOR = "";
  app.selected.SITUACAO = "SEM PLACA";

  // Reseta app.selected_db
  app.selected_db.id = null;
  app.selected_db.NRPATRIMONIO1 = "";
  app.selected_db.DESCRICAO = "";
  app.selected_db.LOCALIZACAO = "";
  app.selected_db.ESTADO = "";
  app.selected_db.OBSERVACAO = "";
  app.selected_db.SITUACAO = "";
  app.selected_db.UPDATED = "";
  app.selected_db.VALOR = "";
};

export const saveItemSelected = () => {
  // **LÓGICA DE ATUALIZAÇÃO CORRIGIDA**
  // 1. Cria uma cópia do item selecionado para evitar alterações no original
  const itemToSave = { ...app.selected };
  itemToSave.UPDATED = new Date();

  // 2. Procura o item existente pelo ID único
  const existingIndex = app.selects.findIndex(e => e.id === itemToSave.id);

  if (existingIndex !== -1) {
    // 3. Se o item existe, atualiza ele diretamente na sua posição original
    app.selects[existingIndex] = itemToSave;
  } else {
    // 4. Se não existe, adiciona-o como um novo item
    app.selects.push(itemToSave);
  }

  saveData();
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
    // Padroniza os nomes das propriedades ao carregar o CSV
    app.values = result.data.map((e) =>
      Object.keys(e).reduce(
        (acc, key) => {
          const newKey = key.trim().replace("LOCALIZAÇÃO", "LOCALIZACAO").replace("OBSERVAÇÃO", "OBSERVACAO");
          if (newKey) acc[newKey] = e[key];
          return acc;
        },
        { SITUACAO: "", OBSERVACAO: "", UPDATED: "" }
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
      "LOCALIZACAO",
      "ESTADO",
      "OBSERVACAO",
      "SITUACAO",
    ];

    const values = app.selects.map((e, index) =>
      headers.map((key) => e[key] || "")
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
    const situacao = item["SITUACAO"] || "REGULAR";
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
      Local: e["LOCALIZACAO"] || "",
      Estado: e["SITUACAO"] || "",
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
    const situacaoA = order.indexOf(a["SITUACAO"] || "REGULAR");
    const situacaoB = order.indexOf(b["SITUACAO"] || "REGULAR");
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
    const situacaoA = order.indexOf(a["SITUACAO"] || "REGULAR");
    const situacaoB = order.indexOf(b["SITUACAO"] || "REGULAR");
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
  if (!data || data.length === 0) return "<table></table>";

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
    Object.assign(app.selected, {
      id: uuidv4(),
      NRPATRIMONIO1: "",
      DESCRICAO: "",
      LOCALIZACAO: "",
      ESTADO: "",
      OBSERVACAO: "",
      SITUACAO: "SEM PLACA",
      UPDATED: "",
      VALOR: "",
      ...(dt.selected || {}),
    });
    Object.assign(app.selected_db, {
      id: null,
      NRPATRIMONIO1: "",
      DESCRICAO: "",
      LOCALIZACAO: "",
      ESTADO: "",
      OBSERVACAO: "",
      SITUACAO: "",
      UPDATED: "",
      VALOR: "",
      ...(dt.selected_db || {}),
    });

    app.values = [...(dt.values || [])].map((e) => {
      if (!e.id) e.id = uuidv4();
      return e;
    });
    app.fileName = dt.fileName || "";
    app.session = dt.session || "";
  } else {
    app.values = [];
  }
} catch (error) {
  console.log("Erro ao carregar dados localStorage: ", error);
  app.values = [];
}
