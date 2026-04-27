<script setup lang="ts">
import { ref, watch } from 'vue'
import { api } from '@/services/myFetch'
import type { Workout } from '@/types/workout'
import ActivityTracker from '@/components/ActivityTracker.vue'
import WorkoutLog from '@/components/WorkoutLog.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const toggleWorkoutLog = ref(false)
const workouts = ref<Workout[]>([])

async function loadWorkouts() {
  const id = userStore.activeUserId
  if (!id) return

  const res = await api<{ data: Workout[] }>(`/workouts/${id}`)
  workouts.value = res.data
}

// react to user changes
watch(
  () => userStore.activeUserId,
  () => loadWorkouts(),
  { immediate: true },
)

// after saving a workout
function handleSaved() {
  loadWorkouts()
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

  <!-- Workout Log Modal -->
  <WorkoutLog v-if="toggleWorkoutLog" @close="toggleWorkoutLog = false" @saved="handleSaved" />

  <!-- Activity Tracker -->
  <div class="container">
    <h1 class="title is-3">My Statistics</h1>
    <ActivityTracker :workouts="workouts" />
  </div>
</template>

<style scoped></style>
