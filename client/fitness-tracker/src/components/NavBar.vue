<script setup lang="ts"></script>

<template>
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
        <div class="dropdown is-active">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Login</span>
            <span class="icon is-small">
              <i class="fa-solid fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">Main User</a>
              <a href="#" class="dropdown-item">User #1</a>
              <a href="#" class="dropdown-item">User #2</a>
            </div>
          </div>
        </div>
        <a href="form.html" class="navbar-item">Sign Up</a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
