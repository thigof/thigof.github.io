<template>
  <q-form @submit.prevent="submitForm">
    <fieldset>
      <input type="file" accept=".csv" @change="handleFileUpload" />
    </fieldset>
    <p class="">Dados: {{ data?.values?.length }}</p>

    <div class="row items-center q-gutter-md" style="height: 100%">
      <InputFixed
        inputType="number"
        :inputText="form.npat"
        :selectAllText="true"
        @update="(e) => handleNpat(e)"
        :label="
          computedNpat ? 'NPAT' : form.npat.length ? 'Não encontrado' : 'NPAT'
        "
      />
      <q-btn
        dense
        @click.prevent="handleNpat"
        :disabled="computedNpat"
        size="btn_size_round_md"
        color="primary"
        label="Pesquisar"
        class="col-shrink"
      />
    </div>

    <InputFixed
      :inputText="form.descricao"
      @update="(e) => (form.descricao = e)"
      label="Descrição"
    />

    <InputFixed
      :inputText="form.local"
      @update="(e) => (form.local = e)"
      label="Local"
    />

    <InputFixed
      :inputText="form.estado"
      @update="(e) => (form.estado = e)"
      label="Estado"
    />

    <InputFixed
      :inputText="form.obs"
      @update="(e) => (form.obs = e)"
      label="Observação"
    />

    <div class="row q-pa-md">
      <q-btn
        color="green-9"
        class="q-mx-sm"
        type="button"
        icon="add"
        label="Adicionar"
        @click="submitForm"
      />
    </div>
    <div class="row justify-center items-center q-gutter-md q-pa-md">
      <q-btn
        flat
        icon="description"
        label="CSV"
        class="q-mx-sm"
        type="button"
        @click="gerarCSV(data.selected)"
      />
      <q-btn
        flat
        icon="code"
        label="Relatório"
        class="q-mx-sm"
        type="button"
        @click.prevent="gerarTableRelatorio"
      />
      <q-btn
        flat
        icon="code"
        label="Termo"
        class="q-mx-sm"
        type="button"
        @click="gerarTableTermo"
      />
      <q-btn
        flat
        icon="clear"
        label="Limpar"
        class="q-mx-sm"
        type="button"
        @click="limparTabela"
      />
    </div>
  </q-form>

  <ShowTables
    :tableData="data.selected.reverse()"
    :headers="data.colunas"
    @removeRow="handleRemove"
  />
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import Papa, { LocalChunkSize } from "papaparse";
import ShowTables from "src/components/ShowTables.vue";
import InputFixed from "src/components/InputFixed.vue";

const form = ref({
  npat: "",
  descricao: "",
  local: "",
  estado: "",
  obs: "",
  search1: "",
  search2: "",
  searchSelected: "",
  searchColumn: "",
});

const data = reactive({
  values: null,
  csv: "",
  selected: [],
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

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const csvData = e.target.result;
    data.csv = csvData;
    const result = Papa.parse(csvData, {
      header: true,
    });
    data.values = result.data.map((e) =>
      Object.keys(e).reduce(
        (acc, key) => {
          if (key.trim()) acc[key] = e[key];
          return acc;
        },
        { SITUAÇÃO: "", OBSERVAÇÃO: "" }
      )
    );

    data.fields = result.meta.fields;
    saveData();
  };
  reader.readAsText(file);
};

const saveData = () => {
  try {
    localStorage.setItem("data", JSON.stringify(data));
  } catch (error) {
    console.log("erro ao salvar: ", error);
  }
};

const handleNpat = (npat) => {
  if (npat) {
    const value = data.values.find((e) => e.NRPATRIMONIO1 === npat);
    if (value) {
      console.log("Valores: ", value);
      try {
        form.value.descricao = value.DESCRICAO;
        form.value.local = value.LOCALIZACAO;
        form.value.estado = value.ESTADO;
        form.value.obs = value.OBS;
      } catch (error) {
        error;
      }
    }
  }
};

const computedNpat = computed(() => {
  if (data?.values && form?.value.npat) {
    return data?.values?.find((e) => e.NRPATRIMONIO1 === form.value.npat);
  } else {
    return false;
  }
});

function gerarCSV(data, filename = "data.csv", separator = ";") {
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

const gerarTableRelatorio = () => {
  gerarTableFormate(
    data.selected.map((e) => ({
      NPAT: e["NRPATRIMONIO1"] || "",
      Setor: e["NOME_SETOR"] || "",
      Local: e["LOCALIZACAO"] || "",
      Valor:
        Number(e["VALOR"]).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) || "",
      Estado: e["DESC_ESTADO"] || "",
    }))
  );
};

const gerarTableTermo = () => {
  gerarTableFormate(
    data.selected.map((e) => ({
      NPAT: e["NRPATRIMONIO1"] || "",
      Descrição: e["DESCRICAO"] || "",
      Local: e["LOCALIZACAO"] || "",
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

const gerarTable = (data) => {
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
  // navigator.clipboard.writeText(tableHTML);
  return tableHTML;
};

const gerarTableFormate = (data) => {
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

function limparTabela() {
  data.selected = [];
  saveData();
}

const resetForm = () => {
  form.value.descricao = "";
  form.value.local = "";
  form.value.estado = "";
  form.value.obs = "";
};

const submitForm = () => {
  const obj = Object.fromEntries(data.fields.map((key) => [key, ""]));
  obj.NRPATRIMONIO1 = form.value.npat;
  obj.DESCRICAO = form.value.descricao;
  obj.LOCALIZACAO = form.value.local;
  obj.ESTADO = form.value.estado;
  obj.OBSERVAÇÃO = form.value.obs;

  if (!form.value.npat || form.value.npat === "0") {
    obj.SITUAÇÃO = "SEM PLACA";
    data.selected.push(obj);
  } else {
    const item = data?.values?.find((e) => e.NRPATRIMONIO1 === form.value.npat);
    if (item) {
      console.log("Adicionar: ", item);
      Object.assign(item, obj, { SITUAÇÃO: "REGULAR" });
      data.selected.push(item);
    } else {
      obj.SITUAÇÃO = "SEM REGISTRO";
      data.selected.push(obj);
    }
  }
  console.log("Dados form submit save: ", obj);
  saveData();
};

const handleRemove = (index) => {
  if (index > -1) {
    data.selected.splice(index, 1);
  }
  saveData();
};

try {
  const storedData = localStorage.getItem("data");
  if (storedData) {
    const dt = JSON.parse(storedData);
    data.csv = dt.csv;
    data.fields = dt.fields;
    data.selected = dt.selected;
    data.values = dt.values;
  }
} catch (error) {
  console.log("Erro ao carregar dados localStorage: ", error);
}

onMounted(() => {});
</script>

<style scoped lang="scss">
.q-table {
  tbody {
    td {
      padding: 2px !important;
      height: 20px;
    }
  }
}
</style>
