<template>
  <q-form @submit.prevent="submitForm">
    <div class="q-pa-md row items-start q-gutter-md">
      <router-link to="/settings">
        <q-chip> {{ app?.values?.length || 0 }} registros </q-chip>
      </router-link>
      <router-link to="/">
        <q-chip> {{ app?.selects?.length }} verificados </q-chip>
      </router-link>
    </div>

    <InputFixed
      tipo="number"
      :textSelect="true"
      v-model="form.npat"
      :label1="'NPAT ' + getLabelNpat"
    />

    <InputFixed v-model="app.selected.DESCRICAO" label1="Descrição" />

    <InputFixed v-model="app.selected.LOCALIZAÇÃO" label1="Local" />

    <InputFixed v-model="app.selected.ESTADO" label1="Estado" />

    <InputFixed v-model="app.selected.OBSERVAÇÃO" label1="Observação" />

    <div class="row q-mt-sm q-gutter-md">
      <div class="">
        <q-btn
          color="green-9"
          type="button"
          icon="send"
          label="Salvar"
          @click="submitForm"
        />
      </div>
      <div class="">
        <q-btn
          color="yellow-9"
          type="button"
          icon="close"
          label="Cancelar"
          v-show="app.selected.NRPATRIMONIO1 || app.selected.LOCALIZAÇÃO"
          @click="clearForm"
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
      <div class="col" v-show="app.selects?.length">
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
import { computed, ref, watch } from "vue";
import ShowTables from "src/components/ShowTables.vue";
import InputFixed from "src/components/InputFixed.vue";
import { v4 as uuidv4 } from "uuid";
import {
  app,
  gerarCSV,
  gerarTableRelatorio,
  gerarTableTermo,
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

const clearForm = () => {
  selectedReset();
  form.value.npat = "";
};

const submitForm = () => {
  saveItemSelected();
  form.value.npat = "";
  selectedReset();
  saveData();
};

const handleClickedTable = (row) => {
  const item = app.selects.find((e) => e.id === row.id);
  if (item) {
    form.value.npat = item.NRPATRIMONIO1;
    setTimeout(() => {
      app.selected.id = item.id;
      app.selected.NRPATRIMONIO1 = item.NRPATRIMONIO1;
      app.selected.DESCRICAO = item.DESCRICAO || "";
      app.selected.LOCALIZAÇÃO = item.LOCALIZAÇÃO || "";
      app.selected.ESTADO = item.ESTADO || "";
      app.selected.OBSERVAÇÃO = item.OBSERVAÇÃO || "";
    }, 1000);
  }
};

const handleRemoveTable = (index) => {
  app.selects = app.selects.filter((e) => e.id !== index.id);
  saveData();
};

const getLabelNpat = computed(() =>
  ["SEM PLACA"].includes(app.selected.SITUAÇÃO) ? "" : app.selected.SITUAÇÃO
);

watch(
  () => form.value.npat,
  () => {
    try {
      selectedReset();
      app.selected.NRPATRIMONIO1 = form.value.npat;
      const item = app.values?.find(
        (e) => e.NRPATRIMONIO1 === String(form.value.npat)
      );
      if (item) {
        app.selected.id = item.id || uuidv4();
        app.selected.DESCRICAO = item.DESCRICAO || "";
        app.selected.LOCALIZAÇÃO = item.LOCALIZAÇÃO || "";
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
