<script setup lang="ts">
import { ref } from 'vue'
import { api } from '@/services/myFetch'
import { useRouter } from 'vue-router'
import { loadUserFromToken } from '@/services/auth'

const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

async function login() {
  errorMessage.value = ''
  loading.value = true

  try {
    const res = await api<{ token: string }>('/auth/login', {
      email: email.value,
      password: password.value,
    })

    localStorage.setItem('token', res.token)
    loadUserFromToken()
    router.push('/statistics')
  } catch (err: unknown) {
    errorMessage.value = (err as { message?: string })?.message?.includes('401')
      ? 'Invalid email or password'
      : 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <h1 class="title">Login</h1>

    <input v-model="email" placeholder="Email" class="input" type="email" />
    <input v-model="password" placeholder="Password" class="input mt-2" type="password" />

    <p v-if="errorMessage" class="has-text-danger mt-2">
      {{ errorMessage }}
    </p>

    <button class="button is-primary mt-3" @click="login" :class="{ 'is-loading': loading }">
      Login
    </button>
  </div>
</template>
