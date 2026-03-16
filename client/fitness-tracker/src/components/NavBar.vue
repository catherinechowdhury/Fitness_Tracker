<script setup lang="ts">
import { ref } from 'vue'
import SignUp from './SignUp.vue'

const burgerActive = ref(false)
const toggleSignUp = ref(false)
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
        <a href="index.html" class="navbar-item">Home</a>
        <a href="dashboard.html" class="navbar-item">Dashboard</a>
        <a href="moodtracker.html" class="navbar-item">Mood Tracker</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">About</span>
          <div class="navbar-dropdown">
            <a href="about.html" class="navbar-item">About Us</a>
            <a href="#" class="navbar-item">Our Team</a>
            <a href="#" class="navbar-item">Careers</a>
          </div>
        </div>
      </div>

      <!-- Navbar End -->
      <div class="navbar-end">
        <!---Login Dropdown--->
        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">Login</span>
          <div class="navbar-dropdown">
            <a href="#" class="navbar-item">Admin</a>
            <a href="#" class="navbar-item">User #1</a>
            <a href="#" class="navbar-item">User #2</a>
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
