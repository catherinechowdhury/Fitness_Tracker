<script setup lang="ts">
import { ref, watch } from 'vue'
import { api } from '@/services/myFetch'
import type { Mood } from '@/types/workout'
//import MoodList from '@/components/MoodList.vue'
//import MoodUpdate from '@/components/MoodUpdate.vue'
//import type { DataListEnvelope } from '../../../../server/types/dataEnvelopes'

const toggleMoodUpdate = ref(false)
const moods = ref<Mood[]>([])
const activeUserId = ref(1)

async function loadMoods(id: number) {
  moods.value = await api<Mood[]>(`/moods/${id}`)
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
