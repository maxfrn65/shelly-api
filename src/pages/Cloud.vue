<script setup>
import { ref } from 'vue';
import axios from 'axios';

const deviceStatus = ref();
const deviceStatusPost = ref();

const fetchData = async () => {
  try {
    const response = await axios.get('https://shelly-77-eu.shelly.cloud/device/status', {params: {
        id: '4022d88e30e8',
        auth_key: 'MWNiMjY5dWlk404459961993DCA83AE44BC6E3A6F58906952E7BECA0A5B69DC375C964915ACBC0EA536A0639CB73',
        channel: 0
      }
    });
    deviceStatus.value = response.data.data;
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const postData = async () => {
  try {
    const response =  await axios.post('https://shelly-77-eu.shelly.cloud/device/relay/control', {params: {
        id: '4022d88e30e8',
        turn: "off",
        auth_key: 'MWNiMjY5dWlk404459961993DCA83AE44BC6E3A6F58906952E7BECA0A5B69DC375C964915ACBC0EA536A0639CB73',
        channel: 0
      }
    });
    deviceStatusPost.value = response.data;
    console.log(response.data);
} catch (error) {
    console.log(error);
  }
};

fetchData();


</script>

<template>
  <div id="main">
    <button @click="postData">On/Off</button>
    <div>
      <h2>Connected?</h2>
      <p>{{ deviceStatus.online }}</p>
    </div>
    <div>
      <h2>Temperature</h2>
      <p>{{ deviceStatus.device_status.temperature }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>