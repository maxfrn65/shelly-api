<script setup>
import axios from 'axios';
import { FormData } from 'formdata-node';
import {ref} from "vue";

let data = new FormData();
data.append('id', '4022d88e30e8');
data.append('auth_key', 'MWNiMjY5dWlk404459961993DCA83AE44BC6E3A6F58906952E7BECA0A5B69DC375C964915ACBC0EA536A0639CB73');
data.append('channel', '0');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://shelly-77-eu.shelly.cloud/device/status?id=4022d88e30e8&auth_key=MWNiMjY5dWlk404459961993DCA83AE44BC6E3A6F58906952E7BECA0A5B69DC375C964915ACBC0EA536A0639CB73&channel=0',
  headers: {
    'Content-Type': 'application/json',
  },
  data : data
};

let statusData = ref([])

axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      statusData.value = response.data
    })
    .catch((error) => {
      console.log(error);
    });



const switchSate = async () => {

}

</script>

<template>
  <button @click="">On/Off</button>
  <div v-if="statusData" v-for="status in statusData">
    <p>{{ status.data.online }}</p>
  </div>
  <p v-else>Loading Data...</p>
</template>

<style scoped>

</style>