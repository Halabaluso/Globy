<template>
          <loading v-model:active="props.loading"
                 :can-cancel="false"
                 :is-full-page="true"/>
</template>

<script setup>
import Loading from 'vue-loading-overlay';
const props = defineProps({
    loading: Boolean
})
</script>

<style>

</style>