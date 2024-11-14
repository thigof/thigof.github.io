<template>
  <div class="q-mt-lg" style="padding-top: 25px">
    <fieldset>
      <input
        type="file"
        @change="handleFileUpload"
        label="Selecionar banco de dados csv"
        accept=".xls, .csv"
      />
    </fieldset>
  </div>
</template>

<script setup>
import { handleFileUpload } from "src/boot/app";
</script>
