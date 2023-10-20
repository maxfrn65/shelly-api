<script setup>
import axios from "axios";

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://shelly-86-eu.shelly.cloud/device/status?id=80646F827174&auth_key=MWRmYzM2dWlkE62C6C4C76F817CE0A3D2902F5B5D4C115E49B28CF8539114D9246505DE5D368D560D06020A92480',
  headers: {
    'Content-Type': 'application/json'
  }
};

axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

const switchSate = async () => {

}

</script>

<template>
  <button @click="">On/Off</button>
  <div v-if="settingsData && statusData">
    <pre>{{ settingsData }}</pre>
    <pre>{{ statusData }}</pre>
  </div>
  <p v-else>Loading Data...</p>
</template>

<style scoped>

</style>