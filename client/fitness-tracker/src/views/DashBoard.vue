<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1 class="title is-3">Dashboard</h1>
    <p class="subtitle is-5">
      Welcome to your fitness dashboard! Here you can track your workouts and moods.
    </p>

    <div class="columns">
      <div class="column is-half">
        <h2 class="title is-4">My Workouts</h2>
        <ActivityTracker />
      </div>

      <div class="column is-half">
        <h2 class="title is-4">My Moods</h2>
        <MoodList />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
