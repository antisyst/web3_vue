<template>
  <div id="app">
    <h1>Blockchain Address Balance Checker</h1>
    <AddressInput />
    <BalanceDisplay />
  </div>
</template>

<script setup lang="ts">
import AddressInput from './components/AddressInput.vue';
import BalanceDisplay from './components/BalanceDisplay.vue';
</script>
