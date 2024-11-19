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
</template>

<script setup>
import { handleFileUpload } from "src/boot/app";
import { useRouter } from "vue-router";

const router = useRouter();

const handleFile = (event) => {
  handleFileUpload(event);
  router.push("/");
};
</script>
