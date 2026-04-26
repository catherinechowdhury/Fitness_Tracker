<script setup lang="ts">
import { ref, watch } from 'vue'
import { api } from '@/services/myFetch'
import MoodList from '@/components/MoodList.vue'
import MoodUpdate from '@/components/MoodUpdate.vue'

import type { Mood, DataListEnvelope } from '@/types/workout'

const toggleMoodUpdate = ref(false)
const activeUserId = ref(1)

const moods = ref<Mood[]>([])

async function loadMoods(id: number) {
  const res = await api<DataListEnvelope<Mood>>(`/moods/${id}`)
  moods.value = res.data
}

watch(activeUserId, loadMoods, { immediate: true })
</script>

<template>
  <div class="container">
    <button class="button is-primary" @click="toggleMoodUpdate = true">Add Mood</button>

    <MoodUpdate
      v-if="toggleMoodUpdate"
      @close="toggleMoodUpdate = false"
      @saved="loadMoods(activeUserId)"
    />

    <MoodList :moods="moods" />
  </div>
</template>

<style scoped></style>
