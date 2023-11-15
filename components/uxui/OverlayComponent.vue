<template>
   <div v-if="!loading.loading" class="bg-white/80 h-screen w-screen fixed z-50">
    <div class="opacity-100 flex flex-col justify-center items-center h-screen">
      <client-only>
        <Vue3Lottie :animationData="json" :height="200" :noMargin="true" :width="200" />
        <p class="bg-primary p-1 rounded shadow">Cargando...</p>
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { LoadingStore } from "../../src/store/LoadingStore"
import { json2 } from "../../src/gifs/GifJson"
const json = json2
const loading = LoadingStore()
</script>

<style>

</style>