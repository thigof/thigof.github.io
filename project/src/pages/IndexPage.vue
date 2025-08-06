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

      <InputFixed
        v-model="app.selected.NRPATRIMONIO1"
        :label1="`NPAT: ${app.selected_db.NRPATRIMONIO1 || ''} ${getLabelNpat}`"
        type="number"
        :text-select="true"
      />
      <InputFixed v-model="app.selected.DESCRICAO" :label1="labelDescricao" />
      <InputFixed v-model="app.selected.LOCALIZACAO" :label1="labelLocalizacao" />
      <InputFixed v-model="app.selected.ESTADO" :label1="labelEstado" />
      <InputFixed v-model="app.selected.OBSERVACAO" :label1="labelObservacao" />

      <div class="row q-mt-sm q-gutter-md">
        <q-btn
          :color="isUpdating ? 'blue-9' : 'green-9'"
          type="submit"
          :icon="isUpdating ? 'edit' : 'send'"
          :label="isUpdating ? 'Atualizar' : 'Adicionar'"
        />
        <q-btn
          v-if="app.selected.NRPATRIMONIO1 || app.selected.LOCALIZACAO"
          color="yellow-9"
          type="button"
          icon="close"
          label="Cancelar"
          @click="clearForm"
        />
      </div>

      <div class="row center q-mt-lg q-gutter-x-md">
        <q-btn
          flat
          icon="description"
          label="CSV"
          type="button"
          @click="gerarCSV(app.selects)"
        />
        <q-btn
          flat
          icon="code"
          label="Relatório"
          @click.prevent="gerarTableRelatorio"
        />
        <q-btn
          flat
          icon="code"
          label="Termo"
          type="button"
          @click="gerarTableTermo"
        />
        <q-btn
          v-if="app.selects?.length"
          flat
          icon="clear"
          label="Limpar"
          type="button"
          @click="limparTabela"
        />
      </div>
    </q-form>

    <hr class="q-my-md" />

    <ShowTables
      id="show-tables"
      :table-data="app.selects"
      :headers="app.colunas"
      @remove="handleRemoveTable"
      @clicked="handleClickedTable"
      :reverse="true"
      :editing-row-id="editingRowId"
    />
    <p>Itens selecionados: {{ app.selects.length }}</p>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import ShowTables from "src/components/ShowTables.vue";
import InputFixed from "src/components/InputFixed.vue";
import { v4 as uuidv4 } from "uuid";
import { debounce } from "lodash";
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

const editingRowId = ref(null);
const isSettingFormFromTable = ref(false);

const isUpdating = computed(() => {
  return app.selected.id && app.selects.some(item => item.id === app.selected.id);
});

const clearForm = () => {
  selectedReset();
  editingRowId.value = null;
};

const submitForm = () => {
  saveItemSelected();
  selectedReset();
  editingRowId.value = null;
  saveData();
};

const handleClickedTable = (row) => {
  isSettingFormFromTable.value = true;
  const item = app.selects.find((e) => e.id === row.id);
  if (item) {
    editingRowId.value = item.id;

    // AQUI ESTÁ A MUDANÇA: Carrega o rótulo (`app.selected_db`) do banco de dados ORIGINAL
    const originalItem = app.values?.find((e) => e.NRPATRIMONIO1 === item.NRPATRIMONIO1);
    if (originalItem) {
      Object.assign(app.selected_db, {
        id: originalItem.id,
        NRPATRIMONIO1: originalItem.NRPATRIMONIO1,
        DESCRICAO: originalItem.DESCRICAO || "",
        LOCALIZACAO: originalItem.LOCALIZACAO || "",
        ESTADO: originalItem.DESC_ESTADO || "",
        OBSERVACAO: originalItem.OBSERVACAO || "",
        VALOR: originalItem.VALOR || "",
      });
    } else {
      // Se não encontrar o item original (ex: item "SEM REGISTRO"),
      // define os rótulos com os valores da lista de verificados
      Object.assign(app.selected_db, {
        id: item.id,
        NRPATRIMONIO1: item.NRPATRIMONIO1,
        DESCRICAO: item.DESCRICAO || "",
        LOCALIZACAO: item.LOCALIZACAO || "",
        ESTADO: item.ESTADO || "",
        OBSERVACAO: item.OBSERVACAO || "",
        VALOR: item.VALOR || "",
      });
    }

    // Carrega o formulário (`app.selected`) do item CLICADO (potencialmente editado)
    Object.assign(app.selected, {
      id: item.id,
      NRPATRIMONIO1: item.NRPATRIMONIO1,
      DESCRICAO: item.DESCRICAO || "",
      LOCALIZACAO: item.LOCALIZACAO || "",
      ESTADO: item.ESTADO || "",
      OBSERVACAO: item.OBSERVACAO || "",
      VALOR: item.VALOR || "",
      SITUACAO: item.SITUACAO || "REGULAR",
    });
  }
  setTimeout(() => {
    isSettingFormFromTable.value = false;
  }, 50);
};

const handleRemoveTable = (index) => {
  app.selects = app.selects.filter((e) => e.id !== index.id);
  editingRowId.value = null;
  saveData();
};

const getLabelNpat = computed(() =>
  app.selected.SITUACAO === "SEM PLACA" ? "" : app.selected.SITUACAO
);

const labelDescricao = computed(() => {
  return `Descrição: ${app.selected_db.DESCRICAO || ''}`;
});
const labelLocalizacao = computed(() => {
  return `Local: ${app.selected_db.LOCALIZACAO || ''}`;
});
const labelEstado = computed(() => {
  return `Estado: ${app.selected_db.ESTADO || ''}`;
});
const labelObservacao = computed(() => {
  return `Observação: ${app.selected_db.OBSERVACAO || ''}`;
});

const searchPatrimonio = (npat) => {
  if (!npat) {
    selectedReset();
    return;
  }

  const item = app.values?.find((e) => e.NRPATRIMONIO1 === String(npat));

  if (item) {
    Object.assign(app.selected_db, {
      id: item.id || uuidv4(),
      NRPATRIMONIO1: item.NRPATRIMONIO1,
      DESCRICAO: item.DESCRICAO || "",
      LOCALIZACAO: item.LOCALIZACAO || "",
      ESTADO: item.DESC_ESTADO || "",
      OBSERVACAO: item.OBSERVACAO || "",
      VALOR: item.VALOR || "",
    });

    Object.assign(app.selected, {
      id: item.id || uuidv4(),
      NRPATRIMONIO1: item.NRPATRIMONIO1,
      DESCRICAO: item.DESCRICAO || "",
      LOCALIZACAO: item.LOCALIZACAO || "",
      ESTADO: item.DESC_ESTADO || "",
      OBSERVACAO: item.OBSERVACAO || "",
      VALOR: item.VALOR || "",
      SITUACAO: "REGULAR",
    });
  } else {
    selectedReset();
    app.selected.NRPATRIMONIO1 = npat;
    app.selected.SITUACAO = "SEM REGISTRO";
  }
};

const searchPatrimonioDebounced = debounce(searchPatrimonio, 300);

const scrollToShowTables = () => {
  const element = document.getElementById("show-tables");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

watch(
  () => app.selected.NRPATRIMONIO1,
  (newValue) => {
    if (isSettingFormFromTable.value) {
      return;
    }
    if (!newValue) {
      selectedReset();
    }
    searchPatrimonioDebounced(newValue);
  },
);
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
.original-value {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8rem;
  color: #777;
  padding: 4px;
}
</style>
