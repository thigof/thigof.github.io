<template>
  <q-layout view="lHh lpr lFf">
    <q-btn v-if="!isHome" flat round class="q-pa-md" icon="arrow_back" @click="goBack" />
    <q-btn color="primary" flat round icon="more_vert" class="z-top absolute-top-right q-pa-md">
      <q-menu anchor="top right" self="top end" class="z-top">
        <q-list>
          <q-item to="/" clickable v-close-popup>
            <q-item-section>Principal</q-item-section>
          </q-item>
          <q-item to="/settings" clickable v-close-popup>
            <q-item-section>Configurações</q-item-section>
          </q-item>
          <q-item @click="restore" clickable v-close-popup>
            <q-item-section>Restaurar</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { Dialog } from "quasar";
import { useRouter } from "vue-router";
import { ref, watch } from 'vue';

const router = useRouter();

const isHome = ref(router.currentRoute.value.path === '/');

watch(() => router.currentRoute.value.path, (newPath) => {
  isHome.value = newPath === '/';
});

const restore = () => {
  Dialog.create({
    title: "Restaurar a Aplicação",
    message:
      "Você tem certeza de que deseja apagar todos os registros e restaurar as configurações de fábrica?",
    ok: "Confirmar",
    cancel: "Cancelar",
    persistent: true,
  }).onOk(() => {
    console.log("Apagado...");
    localStorage.clear();
    window.location.reload();
  });
};
const goBack = () => {
  router.back();
};
</script>

<style scope></style>
