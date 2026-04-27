<script setup lang="ts">
import type { Workout } from '@/types/workout'

defineProps<{
  workouts: Workout[]
}>()
const emit = defineEmits<{
  (e: 'delete', id: number): void
  (e: 'edit', workout: Workout): void
}>()
</script>

<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <!-- Empty state -->
        <div v-if="!workouts || workouts.length === 0" class="has-text-centered">
          <p>No workouts logged yet.</p>
        </div>

        <!-- Workout list -->
        <div v-for="workout in workouts" :key="workout.id" class="box summary mb-4 activity-box">
          <h2 class="title is-4 has-text-centered">
            {{ workout.date }}
          </h2>

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
          <div class="buttons mt-3">
            <button class="button is-warning is-small" @click="emit('edit', workout)">Edit</button>

            <button class="button is-danger is-small" @click="emit('delete', workout.id)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
