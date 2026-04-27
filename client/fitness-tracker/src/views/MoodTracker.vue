<script setup lang="ts">
import { ref, watch } from 'vue'
import { api } from '@/services/myFetch'
import type { Mood } from '@/types/workout'
import MoodList from '@/components/MoodList.vue'
import MoodUpdate from '@/components/MoodUpdate.vue'
import { useUserStore } from '@/stores/user'
import { currentUser } from '@/services/auth'

const userStore = useUserStore()
const toggleMoodUpdate = ref(false)
const moods = ref<Mood[]>([])
const editingMood = ref<Mood | null>(null)

async function loadMoods() {
  const id = userStore.activeUserId
  if (id !== null) {
    const res = await api<{ data: Mood[] }>('/moods')
    moods.value = res.data
  }
}

async function deleteMood() {
  await api(`/moods`, undefined, { method: 'DELETE' })
  loadMoods()
}

watch(
  currentUser,
  () => {
    if (currentUser.value) {
      loadMoods()
    }
  },
  { immediate: true },
)

function handleEdit(mood: Mood) {
  editingMood.value = mood
  toggleMoodUpdate.value = true
}

function handleSaved() {
  loadMoods()
}
</script>

<template>
  <div class="container">
    <button class="button is-primary" @click="toggleMoodUpdate = true">Add Mood</button>

    <MoodUpdate
      v-if="toggleMoodUpdate"
      :mood="editingMood"
      @close="toggleMoodUpdate = false"
      @saved="handleSaved"
    />

    <MoodList :moods="moods" @deleted="deleteMood" @edit="handleEdit" />
  </div>
</template>

<style scoped></style>
