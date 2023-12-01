<template>
    <input v-model="address" placeholder="Enter address" />
    <button @click="checkBalance">Check Balance</button>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    setup() {
      const address = ref('');
      const store = useStore();
  
      const checkBalance = () => {
        store.dispatch('blockchain/checkBalance', address.value);
      };
  
      return {
        address,
        checkBalance,
      };
    },
  });
  </script>
  