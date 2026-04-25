<script setup lang="ts">
import { ref, watch } from 'vue'

import MoodList from '@/components/MoodList.vue'
import MoodUpdate from '@/components/MoodUpdate.vue'

const toggleMoodUpdate = ref(false)

const activeUserId = ref(1)
const moods = ref([])

async function loadMoods(id: number) {
  const res = await fetch(`http://localhost:3000/moods/${id}`)
  moods.value = await res.json()
}

watch(activeUserId, loadMoods, { immediate: true })
</script>

<template>
  <div class="container">
    <button class="button is-primary" @click="toggleMoodUpdate = true">Add Mood</button>

    <MoodUpdate v-if="toggleMoodUpdate" @close="toggleMoodUpdate = false" />

    <MoodList :moods="moods" />
  </div>
</template>

<style scoped></style>
