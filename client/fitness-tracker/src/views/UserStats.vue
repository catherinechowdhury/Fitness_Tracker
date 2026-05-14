<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { api } from '@/services/myFetch'
import type { Workout } from '@/types/workout'
import ActivityTracker from '@/components/ActivityTracker.vue'
import WorkoutLog from '@/components/WorkoutLog.vue'
import { currentUser } from '@/services/auth'

import { useInfiniteScroll } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const allWorkouts = ref<Workout[]>([])
const pageSize = 5
const visibleCount = ref(pageSize)

const workouts = computed(() => allWorkouts.value.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < allWorkouts.value.length)

const { reset } = useInfiniteScroll(
  el,
  () => {
    visibleCount.value += pageSize
  },
  {
    distance: 10, //distance in pixels from the bottom to trigger loading more
    canLoadMore: () => hasMore.value,
  },
)

const toggleWorkoutLog = ref(false)

const editingWorkout = ref<Workout | null>(null)

async function loadWorkouts() {
  if (!currentUser.value) return

  const res = await api<{ data: Workout[] }>(`/workouts`)
  allWorkouts.value = res.data
}

async function deleteWorkout(id: number) {
  await api(`/workouts/${id}`, undefined, { method: 'DELETE' })
  loadWorkouts()
}

function handleEdit(workout: Workout) {
  editingWorkout.value = workout
  toggleWorkoutLog.value = true
}

watch(
  currentUser,
  () => {
    if (currentUser.value) {
      loadWorkouts()
    }
  },
  { immediate: true },
)

// after saving a workout
function handleSaved() {
  loadWorkouts()
}

function resetList() {
  visibleCount.value = pageSize
  reset()
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
  <WorkoutLog
    v-if="toggleWorkoutLog"
    :workout="editingWorkout"
    @close="toggleWorkoutLog = false"
    @saved="handleSaved"
  />

  <!-- Activity Tracker with Infinite Scroll -->
  <div class="container">
    <h1 class="title is-3">My Statistics</h1>
    <!--A label that shows which workout number is showing-->
    <label class="label">Showing {{ workouts.length }} of {{ allWorkouts.length }} workouts</label>

    <div ref="el" style="max-height: 600px; overflow-y: auto">
      <ActivityTracker :workouts="workouts" @delete="deleteWorkout" @edit="handleEdit" />
      <div class="skeleton-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <p v-if="!hasMore" class="has-text-centered mt-3">No more workouts to load.</p>
    </div>

    <button class="button mt-3" @click="resetList()">Reset</button>
  </div>
</template>

<style scoped></style>
