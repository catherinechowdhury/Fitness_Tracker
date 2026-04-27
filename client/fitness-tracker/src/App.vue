<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { loadUserFromToken } from '@/services/auth'

loadUserFromToken()
</script>

<template>
  <NavBar />

  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
