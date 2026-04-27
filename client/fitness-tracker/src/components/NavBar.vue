<script setup lang="ts">
import { ref } from 'vue'
import SignUp from './SignUp.vue'
import { useUserStore } from '@/stores/user'
const burgerActive = ref(false)
const toggleSignUp = ref(false)
const userStore = useUserStore()
//const activeUserId = ref(0)
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
        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">Login</span>
          <div class="navbar-dropdown">
            <select v-model="userStore.activeUserId">
              <option disabled value="">Select User</option>
              <option :value="1">Alice</option>
              <option :value="2">Bob</option>
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
