<template>
  <div>
    <button @click="fetchDeviceStatus">Récupérer les données</button>
    <div v-if="deviceStatus">
      <pre>{{ deviceStatus }}</pre>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const deviceStatus = ref(null);
    const id = '4022d88e30e8';
    const auth_key = 'MWNiMjY5dWlk404459961993DCA83AE44BC6E3A6F58906952E7BECA0A5B69DC375C964915ACBC0EA536A0639CB73';
    const channel = '0';

    const fetchDeviceStatus = () => {
      const url = `https://shelly-77-eu.shelly.cloud/device/status?id=${id}&auth_key=${auth_key}&channel=${channel}`;

      axios
          .get(url)
          .then((response) => {
            if (response.data && response.data.device_status) {
              deviceStatus.value = JSON.stringify(response.data.device_status);
            } else {
              console.log('Les données ne contiennent pas de propriété "device_status".');
            }
          })
          .catch((error) => {
            console.error(error);
          });
    };

    return {
      deviceStatus,
      fetchDeviceStatus,
    };
  },
};
</script>
