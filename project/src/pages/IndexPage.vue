<template>
  <q-form @submit.prevent="submitForm">
    <fieldset>
      <input type="file" accept=".csv" @change="handleFileUpload" />
    </fieldset>
    <p class="">Dados: {{ app?.values?.length }}</p>

    <InputFixed
      tipo="number"
      :textSelect="true"
      v-model="form.npat"
      :label1="'NPAT ' + app.selected.SITUAÇÃO"
    />

    <InputFixed v-model="app.selected.DESCRICAO" label1="Descrição" />

    <InputFixed v-model="app.selected.LOCALIZACAO" label1="Local" />

    <InputFixed v-model="app.selected.ESTADO" label1="Estado" />

    <InputFixed v-model="app.selected.OBSERVAÇÃO" label1="Observação" />

    <div class="row q-gutter-md q-pa-md">
      <q-btn
        color="green-9"
        type="button"
        icon="send"
        label="Adicionar"
        @click="submitForm"
      />
      <q-btn
        color="yellow-9"
        type="button"
        icon="close"
        label="Cancelar"
        @click="selectedReset"
      />
    </div>
    <div class="row justify-center items-center q-gutter-md q-pa-md">
      <q-btn
        flat
        icon="description"
        label="CSV"
        class="q-mx-sm"
        type="button"
        @click="gerarCSV(app.selects)"
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
    :tableData="app.selects"
    :headers="app.colunas"
    @remove="handleRemoveTable"
    @clicked="handleDbClickedTable"
    :reverse="true"
  />
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import Papa from "papaparse";
import ShowTables from "src/components/ShowTables.vue";
import InputFixed from "src/components/InputFixed.vue";
import { v4 as uuidv4 } from "uuid";
import { app, saveItemSelected, selectedReset } from "src/boot/app";

const form = ref({
  npat: "",
  search1: "",
  search2: "",
  searchSelecteds: "",
  searchColumn: "",
});

const handleFileUpload = (event) => {
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

const saveData = () => {
  try {
    localStorage.setItem("data", JSON.stringify(app));
  } catch (error) {
    console.log("erro ao salvar: ", error);
  }
};

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
    app.selects.map((e) => ({
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
    app.selects.map((e) => ({
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
  navigator.clipboard.writeText(tableHTML);
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
  app.selects = [];
  saveData();
}

const submitForm = () => {
  saveItemSelected();
  form.value.npat = "";
  selectedReset();
  saveData();
};

const handleDbClickedTable = (index) => {
  const item = app.selects[index];
  if (item) {
    form.value.npat = item.NRPATRIMONIO1;
    setTimeout(() => {
      app.selected.id = item.id;
      app.selected.NRPATRIMONIO1 = item.NRPATRIMONIO1;
      app.selected.DESCRICAO = item.DESCRICAO || "";
      app.selected.LOCALIZACAO = item.LOCALIZACAO || "";
      app.selected.ESTADO = item.ESTADO || "";
      app.selected.OBSERVAÇÃO = item.OBSERVAÇÃO || "";
    }, 1000);
  }
};

const handleRemoveTable = (index) => {
  if (index > -1) {
    app.selects.splice(index, 1);
  }
  saveData();
};

watch(
  () => form.value.npat,
  () => {
    try {
      const item = app.values?.find(
        (e) => e.NRPATRIMONIO1 === String(form.value.npat)
      );
      selectedReset();
      if (item) {
        console.log("Item::: ", item);
        app.selected.id = item.id || uuidv4();
        app.selected.NRPATRIMONIO1 = form.value.npat;
        app.selected.DESCRICAO = item.DESCRICAO || "";
        app.selected.LOCALIZACAO = item.LOCALIZACAO || "";
        app.selected.ESTADO = item.ESTADO || "";
        app.selected.OBSERVAÇÃO = item.OBSERVAÇÃO || "";
      }
      if (!form.value.npat) {
        app.selected.SITUAÇÃO = "SEM PLACA";
      } else if (item) {
        app.selected.SITUAÇÃO = "REGULAR";
      } else {
        app.selected.SITUAÇÃO = "SEM REGISTRO";
      }
    } catch (_error) {
      console.log("npat: ", _error);
      selectedReset();
    }
  },
  { immediate: true }
);

try {
  form.value.npat = null;
} catch (error) {
  console.log("Erro ao carregar dados localStorage: ", error);
}
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
