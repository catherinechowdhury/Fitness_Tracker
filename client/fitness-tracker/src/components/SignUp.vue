<script setup lang="ts">
import { ref } from 'vue'
import { api } from '@/services/myFetch'

const emit = defineEmits(['close', 'save'])

const form = ref({
  name: '',
  email: '',
  password: '',
})

async function submitForm() {
  try {
    const res = await api<{ data: unknown }>('/users', {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
    })

    emit('save', res.data)

    form.value = {
      name: '',
      email: '',
      password: '',
    }
  } catch (err) {
    console.error('Error creating user:', err)
  }
}
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Sign Up</p>
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>

      <section class="modal-card-body">
        <div class="box">
          <h3 class="title is-3">Create your account</h3>

          <div class="field">
            <label class="label">UserName</label>
            <div class="control">
              <input class="input" type="text" placeholder="UserName" v-model="form.name" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Email" v-model="form.email" />
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" v-model="form.password" />
          </div>
        </div>
      </section>

      <footer class="modal-card-foot">
        <button class="button is-success" @click="submitForm">Submit</button>
        <button class="button" @click="$emit('close')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
