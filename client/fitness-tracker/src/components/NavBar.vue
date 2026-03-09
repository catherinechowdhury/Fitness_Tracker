<script setup lang="ts"></script>

<template>
  <!------------------------Navigation Bar--------------------->
  <nav class="block navbar is-danger" role="navigation" aria-label="main navigation">
    <a href="index.html" class="navbar-item"><i class="fa-brands fa-files-pinwheel"></i></a>
    <div class="navbar-menu">
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
        <a class="navbar-item">Login</a>
        <a href="form.html" class="navbar-item">Sign Up</a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
