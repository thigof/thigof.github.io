<template>
  <div class="container q-pa-md">
    <q-form @submit.prevent="submitForm">
      <div class="row flex items-center q-gutter-md q-mb-md">
        <div class="column items-center">
          <small>BASE DE DADOS</small>
          <router-link to="/settings">
            <q-chip clickable>
              {{ app?.values?.length || 0 }} registros
            </q-chip>
          </router-link>
        </div>
        <div class="column items-center">
          <small>VERIFICADOS</small>
          <a href="#show-tables" @click.prevent="scrollToShowTables">
            <q-chip clickable>
              {{ app?.selects?.length || 0 }} registros
            </q-chip>
          </a>
        </div>
      </div>

      <InputFixed v-model="npatInput" :label1="'NPAT ' + getLabelNpat" type="number" :text-select="true" />
      <InputFixed v-model="app.selected.DESCRICAO" label1="Descrição" />
      <InputFixed v-model="app.selected.LOCALIZACAO" label1="Local" />
      <InputFixed v-model="app.selected.ESTADO" label1="Estado" />
      <InputFixed v-model="app.selected.OBSERVACAO" label1="Observação" />

      <div class="row q-mt-sm q-gutter-md">
        <q-btn :color="isUpdating ? 'blue-9' : 'green-9'" type="submit" :icon="isUpdating ? 'edit' : 'send'"
          :label="isUpdating ? 'Atualizar' : 'Adicionar'" />
        <q-btn v-if="app.selected.NRPATRIMONIO1 || app.selected.LOCALIZACAO" color="yellow-9" type="button" icon="close"
          label="Cancelar" @click="clearForm" />
      </div>

      <div class="row center q-mt-lg q-gutter-x-md">
        <q-btn flat icon="description" label="CSV" type="button" @click="gerarCSV(app.selects)" />
        <q-btn flat icon="code" label="Relatório" @click.prevent="gerarTableRelatorio" />
        <q-btn flat icon="code" label="Termo" type="button" @click="gerarTableTermo" />
        <q-btn v-if="app.selects?.length" flat icon="clear" label="Limpar" type="button" @click="limparTabela" />
      </div>
    </q-form>

    <hr class="q-my-md" />

    <ShowTables id="show-tables" :table-data="app.selects" :headers="app.colunas" @remove="handleRemoveTable"
      @clicked="handleClickedTable" :reverse="true" :editing-row-id="editingRowId" />
    <p>Itens selecionados: {{ app.selects.length }}</p>
  </div>
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

const npatInput = ref("");
const editingRowId = ref(null);

const isUpdating = computed(() => {
  return app.selected.id && app.selects.some(item => item.id === app.selected.id);
});

const clearForm = () => {
  selectedReset();
  npatInput.value = "";
  editingRowId.value = null;
};

const submitForm = () => {
  saveItemSelected();
  npatInput.value = "";
  selectedReset();
  editingRowId.value = null;
  saveData();
};

const handleClickedTable = (row) => {
  const item = app.selects.find((e) => e.id === row.id);
  if (item) {
    editingRowId.value = item.id;
    npatInput.value = item.NRPATRIMONIO1;
    setTimeout(() => {
      Object.assign(app.selected, {
        id: item.id,
        NRPATRIMONIO1: item.NRPATRIMONIO1,
        DESCRICAO: item.DESCRICAO || "",
        LOCALIZACAO: item.LOCALIZACAO || "",
        ESTADO: item.ESTADO || "",
        OBSERVACAO: item.OBSERVACAO || "",
        VALOR: item.VALOR || "",
      });
    }, 100);
  }
};

const handleRemoveTable = (index) => {
  app.selects = app.selects.filter((e) => e.id !== index.id);
  editingRowId.value = null;
  saveData();
};

const getLabelNpat = computed(() =>
  app.selected.SITUACAO === "SEM PLACA" ? "" : app.selected.SITUACAO
);

const searchPatrimonio = (npat) => {
  selectedReset();
  app.selected.NRPATRIMONIO1 = npat;
  const item = app.values?.find((e) => e.NRPATRIMONIO1 === String(npat));

  if (item) {
    Object.assign(app.selected, {
      id: item.id || uuidv4(),
      DESCRICAO: item.DESCRICAO || "",
      LOCALIZACAO: item.LOCALIZACAO || "",
      ESTADO: item.DESC_ESTADO || "",
      OBSERVACAO: item.OBSERVACAO || "",
      VALOR: item.VALOR || "",
      SITUACAO: "REGULAR",
    });
  } else {
    app.selected.SITUACAO = npat ? "SEM REGISTRO" : "SEM PLACA";
  }
};

const scrollToShowTables = () => {
  const element = document.getElementById("show-tables");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

watch(npatInput, (newValue) => {
  searchPatrimonio(newValue);
});
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
