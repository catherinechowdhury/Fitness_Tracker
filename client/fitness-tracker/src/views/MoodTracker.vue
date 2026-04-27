<script setup lang="ts">
import { ref, watch } from 'vue'
import { api } from '@/services/myFetch'
import type { Mood } from '@/types/workout'
import { activeUserId } from '@/services/userState'
import MoodList from '@/components/MoodList.vue'
import MoodUpdate from '@/components/MoodUpdate.vue'

const toggleMoodUpdate = ref(false)
const moods = ref<Mood[]>([])

async function loadMoods(id: number | null) {
  if (id !== null) {
    const res = await api<Mood[]>(`/moods/${id}`)
    moods.value = res
  }
}

watch(
  activeUserId,
  (id) => {
    loadMoods(id)
  },
  { immediate: true },
)

function handleSaved() {
  loadMoods(activeUserId.value)
}
</script>

<template>
  <div class="container">
    <button class="button is-primary" @click="toggleMoodUpdate = true">Add Mood</button>

    <MoodUpdate v-if="toggleMoodUpdate" @close="toggleMoodUpdate = false" @saved="handleSaved" />

    <MoodList :moods="moods" @deleted="loadMoods(activeUserId)" />
  </div>
</template>

<style scoped></style>
