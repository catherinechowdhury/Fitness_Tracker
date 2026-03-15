<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half">
        <div class="box has-text-centered">
          <h3 class="title is-3">How are you feeling today?</h3>
          <div class="buttons is-centered">
            <button class="button is-warning">😄 Excited</button>
            <button class="button is-success">😊 Happy</button>
            <button class="button is-success">😌 Calm</button>
            <button class="button is-info">😔 Sad</button>
          </div>
          <div class="buttons is-centered">
            <button class="button is-info">😟 Worried</button>
            <button class="button is-warning">😐 Neutral</button>
            <button class="button is-danger">😴 Tired</button>
            <button class="button is-dark">😡 Angry</button>
          </div>
          <button id="submit" class="button is-primary">Save Mood</button>
        </div>
      </div>

      <div class="column is-half">
        <div class="box has-text-centered">
          <h3 class="title is-3">Placeholder for Image</h3>
          <p>Placeholder content for the image section.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
