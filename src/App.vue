<script setup>
import { ref } from 'vue';
import axios from 'axios';

const deviceStatus = ref();

const fetchData = async () => {
  try {
    const response = await axios.get('https://shelly-77-eu.shelly.cloud/device/status', {params: {
        id: '4022d88e30e8',
        auth_key: 'MWNiMjY5dWlk404459961993DCA83AE44BC6E3A6F58906952E7BECA0A5B69DC375C964915ACBC0EA536A0639CB73',
        channel: 0
      }
    });
    deviceStatus.value = response.data;
    console.log(response.data);
} catch (error) {
    console.log(error);
  }
};

fetchData();
</script>

<template>
  <nav>
    <h1>Shelly PlugS Control</h1>
  </nav>
  <router-view></router-view>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: #ececec;
  padding: 0 20px;
  a {
    margin: 20px;
    text-decoration: none;
    color: #000;
    &:hover {
      color: #00f;
    }
    &:focus {
      color: #00f;
      text-decoration: underline;
    }
  }
}
</style>