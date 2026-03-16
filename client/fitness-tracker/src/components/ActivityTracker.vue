<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="box summary" id="activity-box">
          <h2 class="title is-3 has-text-centered">Today</h2>

          <!-- Row 1 -->
          <div class="columns">
            <div class="column has-text-centered">
              <h3 class="title is-4">Yoga</h3>
              <p class="subtitle is-5">Activity</p>
            </div>

            <div class="column has-text-centered">
              <h3 class="title is-4">Happy</h3>
              <p class="subtitle is-5">Mood</p>
            </div>
          </div>

          <!-- Row 2 -->
          <div class="columns">
            <div class="column has-text-centered">
              <h3 class="title is-4">0 fl oz</h3>
              <p class="subtitle is-5">Water Intake</p>
            </div>

            <div class="column has-text-centered">
              <h3 class="title is-4">0</h3>
              <p class="subtitle is-5">Steps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#activity-box {
  background-color: #eeb0b0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
}
</style>
