<template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <p>Bitcoin Balance: {{ bitcoinBalance }}</p>
        <p>Ethereum Balance: {{ ethereumBalance }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const bitcoinBalance = computed(() => store.state.blockchain.bitcoinBalance);
  const ethereumBalance = computed(() => store.state.blockchain.ethereumBalance);
  const loading = computed(() => store.state.blockchain.loading);
  </script>
  