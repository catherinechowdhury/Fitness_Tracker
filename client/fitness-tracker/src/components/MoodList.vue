<script setup lang="ts">
import { useMoodsStore } from '../stores/moods'

const moodStore = useMoodsStore()
</script>

<template>
  <div v-for="(mood, index) in moodStore.moods" :key="index" class="card mb-4">
    <div class="card-content">
      <!-- Top row -->
      <div class="level">
        <div class="level-left">
          <time class="level-item">{{ mood.date }}</time>
        </div>

        <div class="level-right">
          <p class="title is-5 level-item">{{ mood.mood }}</p>
        </div>
      </div>

      <!-- Comment -->
      <div class="content">
        {{ mood.comment }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #f3eded;
  color: #000000;
}

.title {
  color: #000000;
}
</style>
