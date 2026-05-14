<script setup lang="ts">
import { ref, watch } from 'vue'
import { api } from '@/services/myFetch'
import type { Workout } from '@/types/workout'
import ActivityTracker from '@/components/ActivityTracker.vue'
import WorkoutLog from '@/components/WorkoutLog.vue'
import { currentUser } from '@/services/auth'

import { useInfiniteScroll } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const workouts = ref<Workout[]>([])
const pageSize = 5
const currentPage = ref(1)
const totalWorkouts = ref(0)
const hasMore = ref(true)

const { reset } = useInfiniteScroll(
  el,
  async () => {
    if (loading.value || !hasMore.value) return

    currentPage.value += 1
    await fetchPage(currentPage.value)
  },
  {
    distance: 10,
    canLoadMore: () => hasMore.value && !loading.value,
  },
)

const loading = ref(false)
async function fetchPage(page: number) {
  if (!currentUser.value || loading.value || !hasMore.value) return

  loading.value = true

  try {
    const res = await api<{ data: Workout[]; total: number }>(
      `/workouts?page=${page}&limit=${pageSize}`,
    )

    workouts.value.push(...res.data)
    totalWorkouts.value = res.total
    hasMore.value = workouts.value.length < res.total
  } finally {
    loading.value = false
  }
}

const toggleWorkoutLog = ref(false)

const editingWorkout = ref<Workout | null>(null)

async function loadWorkouts() {
  if (!currentUser.value) return

  workouts.value = []
  currentPage.value = 1
  totalWorkouts.value = 0
  hasMore.value = true

  reset()
  await fetchPage(1)
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

function closeWorkoutLog() {
  toggleWorkoutLog.value = false
  editingWorkout.value = null
}

function handleSaved() {
  closeWorkoutLog()
  loadWorkouts()
}

function resetList() {
  workouts.value = []
  currentPage.value = 1
  hasMore.value = true
  reset()
  fetchPage(1)
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
    @close="closeWorkoutLog"
    @saved="handleSaved"
  />

  <!-- Activity Tracker with Infinite Scroll -->
  <div class="container">
    <h1 class="title is-3">My Statistics</h1>
    <!--A label that shows which workout number is showing-->
    <label class="label">Showing {{ workouts.length }} of {{ totalWorkouts }} workouts</label>

    <div ref="el" style="max-height: 600px; overflow-y: auto">
      <ActivityTracker :workouts="workouts" @delete="deleteWorkout" @edit="handleEdit" />
      <div v-if="loading" class="skeleton-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <p v-if="!hasMore && workouts.length > 0" class="has-text-centered mt-3">
        No more workouts to load.
      </p>
    </div>

    <button class="button mt-3" @click="resetList()">Reset</button>
  </div>
</template>

<style scoped></style>
