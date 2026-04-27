<script setup lang="ts">
import { ref } from 'vue'
import { api } from '@/services/myFetch'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')

async function login() {
  const res = await api<{ token: string }>('/auth/login', {
    email: email.value,
  })

  localStorage.setItem('token', res.token)
  router.push('/statistics')
}
</script>

<template>
  <div class="container">
    <h1 class="title">Login</h1>

    <input v-model="email" placeholder="email" class="input" />

    <button class="button is-primary" @click="login">Login</button>
  </div>
</template>
