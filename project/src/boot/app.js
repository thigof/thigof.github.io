import { v4 as uuidv4 } from "uuid";
import { reactive } from "vue";

export const app = reactive({
  values: null,
  csv: "",
  selected: {
    id: uuidv4(),
    NRPATRIMONIO1: "",
    DESCRICAO: "",
    LOCALIZACAO: "",
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
    { field: "LOCALIZACAO", label: "Local", align: "left" },
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
  app.selected.LOCALIZACAO = "";
  app.selected.ESTADO = "";
  app.selected.OBSERVAÇÃO = "";
  app.selected.UPDATED = "";
};

export const saveItemSelected = () => {
  const item = Object.fromEntries(app.fields.map((key) => [key, ""]));
  Object.assign(item, JSON.parse(JSON.stringify(app.selected)));
  item.UPDATED = new Date();
  if (item.id) {
    app.selects = app.selects.filter((e) => e.id !== item.id);
  }
  app.selects.push(item);
  return true;
};

try {
  const storedData = localStorage.getItem("data");
  if (storedData) {
    const dt = JSON.parse(storedData);
    app.csv = dt.csv;
    app.fields = dt.fields;
    app.selects = dt.selects;
    app.selected = dt.selected;
    app.values = dt.values.map((e) => {
      if (!e.id) e.id = uuidv4();
      return e;
    });
  }
} catch (error) {
  console.log("Erro ao carregar dados localStorage: ", error);
}
