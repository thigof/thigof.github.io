<template>
  <div class="container">
    <div class="row title flex items-center justify-center">
      <q-btn class="q-ml-sm" icon="upload" :label="app.fileName || 'Selecionar banco de dados CSV'"
        @click="$refs.fileInput.click()" />
      <input type="file" ref="fileInput" @change="handleFile" accept=".xls,.csv" hidden />
    </div>
    <div class="q-mt-sm row items-center q-gutter-md">
      <q-input dense outlined v-model="data.search" label="Pesquisar" style="flex: 1" />
      <q-select dense outlined v-model="data.multiple" :options="['10', '50', '100', '1000', '10000']" label="Exibir"
        style="width: 100px" />
    </div>

    <ShowTables :tableData="Array.isArray(data.filteredTableData) ? data.filteredTableData : []" :headers="colunas"
      @remove="handleRemoveTable" @clicked="handleClickedTable" />
    <div class="row flex justify-end text-right text-dark">
      Registros: {{ Math.min(data.multiple, data.filteredTableData.length) }} / {{ app.values?.length }}
    </div>
  </div>
</template>

<script setup>
import { app, handleFileUpload, saveData } from "src/boot/app";
import ShowTables from "src/components/ShowTables.vue";
import { computed, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { debounce } from "lodash";

const router = useRouter();
const data = reactive({
  search: "",
  multiple: "10",
  filteredTableData: []
});

const colunas = computed(() => {
  if (!app.values || app.values.length === 0) return [];
  return Object.keys(app.values[0])
    .filter((e) => !["UPDATED", "OBSERVAÇÃO", "SITUAÇÃO", "id"].includes(e))
    .map((e) => ({ field: e, label: e }));
});

const updateFilteredTableData = debounce(() => {
  const searchLower = data.search.toLowerCase();
  if (app.values?.length === 0) {
    data.filteredTableData = [];
    return;
  }
  if (!searchLower) {
    data.filteredTableData = app.values.slice(0, parseInt(data.multiple));
    return;
  }

  const searchTerms = searchLower.split(" ").filter(term => term);

  const filtered = app.values?.filter((row) => {
    const value = JSON.stringify([row.NRPATRIMONIO1, row.DESCRICAO]).toLowerCase();
    return searchTerms.every(term => value.includes(term));
  }).slice(0, parseInt(data.multiple));

  data.filteredTableData = filtered;
}, 300);

watch(() => [data.search, data.multiple, app.values], updateFilteredTableData, { immediate: true });

const handleFile = async (event) => {
  const file = event.target.files[0];
  if (file) {
    try {
      await handleFileUpload(event);
      app.fileName = file.name;
      saveData();
      // router.push("/");
    } catch (error) {
      console.error("Erro ao fazer upload do arquivo:", error);
    }
  }
};

const handleRemoveTable = (row) => {
  // Implementar lógica para remover a tabela
  console.log("Remover tabela:", row);
};

const handleClickedTable = (row) => {
  // Implementar lógica para quando uma tabela é clicada
  console.log("Tabela clicada:", row);
};

</script>

<style scope>
.container {
  padding: 20px;
}

.title {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
