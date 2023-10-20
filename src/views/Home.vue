<script setup>
  import axios from 'axios'
  import {onMounted, ref} from "vue";

  const settingsData = ref([])

  onMounted(async () => {
    const response = await axios.get('http://192.168.1.100/settings')
    settingsData.value = response.data
  })
</script>

<template>
  <div v-if="settingsData">
    <p>{{ settingsData }}</p>
  </div>
</template>

<style scoped>

</style>