<script setup lang="ts">
import { ref } from 'vue'
import { api } from '@/services/myFetch'
import { useRouter } from 'vue-router'
import { loadUserFromToken } from '@/services/auth'

const router = useRouter()
const email = ref('')
const password = ref('')

async function login() {
  const res = await api<{ token: string }>('/auth/login', {
    email: email.value,
    password: password.value,
  })

  localStorage.setItem('token', res.token)
  loadUserFromToken()
  router.push('/statistics')
}
</script>

<template>
  <div class="container">
    <h1 class="title">Login</h1>

    <input v-model="email" placeholder="Email" class="input" type="email" />
    <input v-model="password" placeholder="Password" class="input mt-2" type="password" />

    <button class="button is-primary mt-3" @click="login">Login</button>
  </div>
</template>
