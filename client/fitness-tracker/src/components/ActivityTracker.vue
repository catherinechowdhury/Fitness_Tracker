<script setup lang="ts">
import { useWorkoutStore } from '@/stores/workout'

const workoutStore = useWorkoutStore()
</script>

<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <div v-if="workoutStore.workouts.length === 0" class="has-text-centered">
          <p>No workouts logged yet.</p>
        </div>

        <div
          v-for="(workout, index) in workoutStore.workouts"
          :key="index"
          class="box summary mb-4 activity-box"
        >
          <h2 class="title is-4 has-text-centered">
            {{ workout.date }}
          </h2>

          <!-- Row 1 -->
          <div class="columns">
            <div class="column has-text-centered">
              <h3 class="title is-5">{{ workout.type }}</h3>
              <p class="subtitle is-6">Activity</p>
            </div>

            <div class="column has-text-centered">
              <h3 class="title is-5">{{ workout.duration }}</h3>
              <p class="subtitle is-6">Duration</p>
            </div>
          </div>

          <!-- Row 2 -->
          <div class="columns">
            <div class="column has-text-centered">
              <h3 class="title is-5">{{ workout.moodBefore }}</h3>
              <p class="subtitle is-6">Mood Before</p>
            </div>

            <div class="column has-text-centered">
              <h3 class="title is-5">{{ workout.moodAfter }}</h3>
              <p class="subtitle is-6">Mood After</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.activity-box {
  background-color: #eeb0b0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
}
</style>
