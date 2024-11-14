<template>
  <q-form @submit.prevent="submitForm">
    <div class="q-pa-md row items-start q-gutter-md">
      <router-link to="/settings">
        <q-chip> {{ app?.values?.length }} registros </q-chip>
      </router-link>
      <router-link to="/">
        <q-chip> {{ app?.selects?.length }} verifiados </q-chip>
      </router-link>
    </div>

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

    <div class="row justify-center q-mt-sm">
      <div class="col">
        <q-btn
          color="green-9"
          type="button"
          icon="send"
          label="Salvar"
          @click="submitForm"
        />
      </div>
      <div class="col">
        <q-btn
          color="yellow-9"
          type="button"
          icon="close"
          label="Cancelar"
          v-show="app.selected.NRPATRIMONIO1 || app.selected.LOCALIZACAO"
          @click="selectedReset"
        />
      </div>
    </div>

    <div class="row center q-mt-lg">
      <div class="col">
        <q-btn
          flat
          class="col-2 col-sm-6"
          icon="description"
          label="CSV"
          type="button"
          @click="gerarCSV(app.selects)"
        />
      </div>
      <div class="col">
        <q-btn
          flat
          class="col-2 col-sm-2"
          icon="code"
          label="Relatório"
          @click.prevent="gerarTableRelatorio"
        />
      </div>
      <div class="col">
        <q-btn
          flat
          class="col-3 col-sm-4"
          icon="code"
          label="Termo"
          type="button"
          @click="gerarTableTermo"
        />
      </div>
      <div class="col">
        <q-btn
          flat
          class="col-3 col-sm-4"
          icon="clear"
          label="Limpar"
          type="button"
          @click="limparTabela"
        />
      </div>
    </div>
  </q-form>

  <ShowTables
    :tableData="app.selects"
    :headers="app.colunas"
    @remove="handleRemoveTable"
    @clicked="handleClickedTable"
    :reverse="true"
  />
  Itens selecionados: {{ app.selects.length }}
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

const handleClickedTable = (index) => {
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
