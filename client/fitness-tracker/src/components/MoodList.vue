<script setup lang="ts">
//import { api } from '@/services/myFetch'
import type { Mood } from '@/types/workout'

const props = defineProps<{
  moods: Mood[]
}>()

const emit = defineEmits<{
  (e: 'deleted', id: number): void
  (e: 'edit', mood: Mood): void
}>()

// async function deleteMood(id: number) {
//   await api(`/moods/${id}`, undefined, {
//     method: 'DELETE',
//   })

//   emit('deleted')
// }
</script>

<template>
  <!-- Empty state -->
  <div v-if="!props.moods || props.moods.length === 0" class="has-text-centered">
    <p>No moods logged yet.</p>
  </div>

  <!-- Mood list -->
  <div v-for="mood in moods" :key="mood.id" class="card mb-4">
    <div class="card-content">
      <div class="level">
        <div class="level-left">
          <time class="level-item">{{ mood.date }}</time>
        </div>

        <div class="level-right">
          <p class="title is-5 level-item">{{ mood.mood }}</p>
        </div>
      </div>

      <div class="content">
        {{ mood.comment }}
      </div>

      <div class="has-text-right mt-2">
        <button class="button is-danger is-light is-small" @click="emit('deleted', mood.id)">
          Delete
        </button>
        <button class="button is-info is-light is-small" @click="emit('edit', mood)">Edit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #f3eded;
  color: #000000;
  margin: 50px 10%;
}

.title {
  color: #000000;
}
</style>
