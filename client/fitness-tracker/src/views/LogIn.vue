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

const emailOptions = ref<string[]>([])
const loadingEmails = ref(false)

async function getEmailSuggestions(text: string) {
  const q = text.trim()

  if (q.length < 2) {
    emailOptions.value = []
    return
  }

  loadingEmails.value = true

  try {
    const res = await api<{ data: string[]; isSuccess: boolean }>(
      `/users/search?q=${encodeURIComponent(q)}`,
      undefined,
      {
        method: 'GET',
      },
    )

    emailOptions.value = res.isSuccess ? res.data : []
  } catch (err) {
    console.error('Email autocomplete failed:', err)
    emailOptions.value = []
  } finally {
    loadingEmails.value = false
  }
}

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

    <o-field label="Email">
      <o-autocomplete
        v-model:input="email"
        :options="emailOptions"
        placeholder="Email"
        clearable
        expanded
        @input="getEmailSuggestions"
      />
    </o-field>

    <o-field label="Password">
      <input v-model="password" placeholder="Password" class="input" type="password" />
    </o-field>

    <p v-if="errorMessage" class="has-text-danger mt-2">
      {{ errorMessage }}
    </p>

    <button class="button is-primary mt-3" @click="login" :class="{ 'is-loading': loading }">
      Login
    </button>
  </div>
</template>
