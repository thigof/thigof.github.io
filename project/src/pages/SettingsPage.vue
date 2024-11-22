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
  <ShowTables
    :tableData="app.values"
    :headers="colunas"
    @remove="handleRemoveTable"
    @clicked="handleClickedTable"
  />
</template>

<script setup>
import { app, handleFileUpload } from "src/boot/app";
import ShowTables from "src/components/ShowTables.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const colunas = computed(() => {
  return Object.keys(app.values[0])
    .filter((e) => !["UPDATED", "OBSERVAÇÃO", "SITUAÇÃO", "id"].includes(e))
    .map((e) => ({ field: e, label: e }));
});

const handleFile = (event) => {
  handleFileUpload(event);
  router.push("/");
};
</script>
