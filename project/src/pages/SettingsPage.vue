<template>
  <div class="row title flex items-center justify-center">
    Arquivo <b class="q-ml-sm">{{ app.fileName }}</b>
  </div>
  <div class="q-mt-lg" style="padding-top: 25px">
    <fieldset>
      <input type="file" @change="handleFile" label="Selecionar banco de dados csv" accept=".xls, .csv" />
    </fieldset>
  </div>
  <div class="q-pa-sm row items-center q-gutter-md">
    <q-input dense outlined v-model="data.search" label="Pesquisar" style="flex: 1" />
    <q-select dense outlined v-model="data.multiple" :options="['10', '50', '100', '1000', '10000']" label="Limite"
      style="width: 100px" />
  </div>
  <div class="row right"> Registros: {{ Math.min(data.multiple, data.filteredTableData.length) }} / {{
    app.values?.length }}
  </div>

  <ShowTables :tableData="Array.isArray(data.filteredTableData) ? data.filteredTableData : []" :headers="colunas"
    @remove="handleRemoveTable" @clicked="handleClickedTable" />

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
      router.push("/");
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
.title {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
