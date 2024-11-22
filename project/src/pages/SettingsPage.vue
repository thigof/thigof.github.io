<template>
  <div class="q-mt-lg" style="padding-top: 25px">
    <fieldset>
      <input
        type="file"
        @change="handleFile"
        label="Selecionar banco de dados csv"
        accept=".xls, .csv"
      />
    </fieldset>
  </div>
  <div class="q-pa-sm row items-center q-gutter-md">
    <q-input
      dense
      outlined
      v-model="data.search"
      label="Pesquisar"
      style="flex: 1"
    />
    <q-select
      dense
      outlined
      v-model="data.multiple"
      :options="['10', '50', '100', '1000', '10000']"
      label="Limite"
      style="width: 100px"
    />
  </div>

  <ShowTables
    :tableData="filteredTableData"
    :headers="colunas"
    @remove="handleRemoveTable"
    @clicked="handleClickedTable"
  />
</template>

<script setup>
import { app, handleFileUpload } from "src/boot/app";
import ShowTables from "src/components/ShowTables.vue";
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const data = reactive({
  search: "",
  multiple: "10",
});

const colunas = computed(() => {
  return Object.keys(app.values[0])
    .filter((e) => !["UPDATED", "OBSERVAÇÃO", "SITUAÇÃO", "id"].includes(e))
    .map((e) => ({ field: e, label: e }));
});

// Filtra os dados de acordo com o texto de busca e o limite selecionado
const filteredTableData = computed(() => {
  const searchLower = data.search.toLowerCase();
  return app.values
    .filter((row) => {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchLower)
      );
    })
    .slice(0, parseInt(data.multiple));
});

const handleFile = (event) => {
  handleFileUpload(event);
  router.push("/");
};
</script>
