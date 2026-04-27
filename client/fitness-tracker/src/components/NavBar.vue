<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from '@/services/myFetch'
import type { User } from '@/types/user'
import { activeUserId } from '@/services/userState'
import SignUp from './SignUp.vue'

const burgerActive = ref(false)
const toggleSignUp = ref(false)

const users = ref<User[]>([])

async function loadUsers() {
  const res = await api<{ data: User[] }>('/users')
  users.value = res.data
}

onMounted(loadUsers)
</script>

<template>
  <nav class="block navbar is-danger" role="navigation" aria-label="main navigation">
    <a href="index.html" class="navbar-item"><i class="fa-brands fa-files-pinwheel"></i></a>

    <!---Burger Menu--->
    <a
      role="button"
      class="navbar-burger"
      @click="burgerActive = !burgerActive"
      :class="{ 'is-active': burgerActive }"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>

    <div class="navbar-menu" :class="{ 'is-active': burgerActive }">
      <!-- Navbar Start -->
      <div class="navbar-start">
        <RouterLink to="/" active-class="is-active" class="navbar-item">Home</RouterLink>
        <RouterLink to="/dashboard" active-class="is-active" class="navbar-item"
          >Dashboard</RouterLink
        >
        <RouterLink to="/moodtracker" active-class="is-active" class="navbar-item"
          >Mood Tracker</RouterLink
        >
        <RouterLink to="/statistics" active-class="is-active" class="navbar-item"
          >Statistics</RouterLink
        >

        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">About</span>
          <div class="navbar-dropdown">
            <a href="#" class="navbar-item">Our Team</a>
            <RouterLink to="/admin" active-class="is-active" class="navbar-item">Admin</RouterLink>
            <a href="#" class="navbar-item">Contact Us</a>
          </div>
        </div>
      </div>

      <!-- Navbar End -->
      <div class="navbar-end">
        <!---Login Dropdown--->
        <div class="navbar-item">
          <div class="select">
            <select v-model="activeUserId">
              <option disabled value="">Select User</option>

              <option v-for="user in users" :key="user.id" :value="user.id">
                {{ user.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="navbar-item">
          <button class="button is-primary" @click="toggleSignUp = true">Sign Up</button>
        </div>
      </div>
    </div>
  </nav>

  <!---Sign Up Modal--->
  <SignUp v-if="toggleSignUp" @close="toggleSignUp = false" />
</template>

<style scoped></style>
