<script setup lang="ts">
import { useMoodsStore } from '../stores/moods'

const moodStore = useMoodsStore()
</script>

<template>
  <div v-for="(mood, index) in moodStore.moods" :key="index" class="card mb-4">
    <div class="card-content">
      <div class="level">
        <div class="level-left">
          <time class="level-item">{{ mood.date }}</time>
        </div>

        <div class="level-right">
          <p class="title is-5 level-item">{{ mood.mood }}</p>
        </div>

        <div class="content">
          {{ mood.comment }}
        </div>

        <div class="level-right">
          <button class="button is-danger is-light is-small" @click="moodStore.deleteMood(index)">
            Delete
          </button>
        </div>
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
