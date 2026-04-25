<script setup lang="ts">
import { ref } from 'vue'

import ActivityTracker from '@/components/ActivityTracker.vue'
import WorkoutLog from '@/components/WorkoutLog.vue'
import type { Workout } from '@/types/workout'

const toggleWorkoutLog = ref(false)
const workouts = ref<Workout[]>([])

function handleSaveWorkout(workout: Workout) {
  workouts.value.push(workout)
  toggleWorkoutLog.value = false
}
</script>

<template>
  <div class="container mt-5">
    <div class="columns">
      <div class="column is-full">
        <div class="box has-background-danger has-text-centered">
          <h1 class="title is-3">My Activity</h1>
          <p class="has-text-weight-bold">
            Record your activity and track your progress over time.
          </p>

          <button
            class="button is-danger is-light is-fullwidth is-size-4"
            @click="toggleWorkoutLog = true"
          >
            Record Activity
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <WorkoutLog v-if="toggleWorkoutLog" @close="toggleWorkoutLog = false" @save="handleSaveWorkout" />

  <!-- Stats -->
  <div class="container">
    <h1 class="title is-3">My Statistics</h1>
    <ActivityTracker :workouts="workouts" />
  </div>
</template>

<style scoped></style>
