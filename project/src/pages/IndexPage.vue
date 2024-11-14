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
import { ref, watch } from "vue";
import ShowTables from "src/components/ShowTables.vue";
import InputFixed from "src/components/InputFixed.vue";
import { v4 as uuidv4 } from "uuid";
import {
  app,
  gerarCSV,
  gerarTableRelatorio,
  gerarTableTermo,
  handleFileUpload,
  limparTabela,
  saveData,
  saveItemSelected,
  selectedReset,
} from "src/boot/app";

const form = ref({
  npat: "",
  search1: "",
  search2: "",
  searchSelecteds: "",
  searchColumn: "",
});

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
