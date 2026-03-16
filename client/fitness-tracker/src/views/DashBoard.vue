<script setup lang="ts">
import { ref } from 'vue'
import WorkoutLog from '@/components/WorkoutLog.vue'

const toggleWorkoutLog = ref(false)
</script>

<template>
  <!---------------------------Record Activity-------------------------------------->
  <div class="container mt-5">
    <div class="columns">
      <div class="column is-full">
        <div class="box has-background-danger has-text-centered">
          <h1 class="title is-3">My Activity</h1>
          <p class="has-text-weight-bold">
            Record your activity and track your progress over time.
          </p>
          <br />
          <button
            class="button is-danger is-light is-fullwidth is-size-4"
            @click="toggleWorkoutLog = true"
          >
            Record Activity
          </button>
        </div>
      </div>

      <div class="column"></div>
    </div>
  </div>

  <!---Workout Log Modal--->
  <WorkoutLog v-if="toggleWorkoutLog" @close="toggleWorkoutLog = false" />
</template>

<style scoped></style>
