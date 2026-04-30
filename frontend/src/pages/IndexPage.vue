<template>
  <div class="fullscreen flex flex-center column q-gutter-md">
    <q-spinner-hourglass size="60px" color="primary" />

    <div class="text-subtitle1 text-grey-8 text-center">
      Bem-vindo! Estamos preparando tudo para você.
      <br />
      Aguarde um momento...
    </div>

    <q-linear-progress indeterminate color="primary" size="6px" class="q-mt-md" style="width: 260px" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  try {
    const defaultPage = localStorage.getItem('appDefaultPage')
    router.replace(defaultPage || '/apps')
  } catch (e) {
    console.error(e)
    router.replace('/apps')
  }
})
</script>
