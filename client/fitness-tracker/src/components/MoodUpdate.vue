<script setup lang="ts">
import { ref } from 'vue'
import { useMoodsStore } from '../stores/moods'

const moodStore = useMoodsStore()

const data = ref({
  mood: '',
  date: '',
  comment: '',
})
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="box has-text-centered">
          <h3 class="title is-3">How are you feeling today?</h3>
          <div class="buttons is-centered">
            <button
              class="button is-warning"
              @click="data.mood = '😄 Excited'"
              :class="{ active: data.mood === '😄 Excited' }"
            >
              😄 Excited
            </button>
            <button
              class="button is-success"
              @click="data.mood = '😊 Happy'"
              :class="{ active: data.mood === '😊 Happy' }"
            >
              😊 Happy
            </button>
            <button
              class="button is-success"
              @click="data.mood = '😌 Calm'"
              :class="{ active: data.mood === '😌 Calm' }"
            >
              😌 Calm
            </button>
            <button
              class="button is-info"
              @click="data.mood = '😔 Sad'"
              :class="{ active: data.mood === '😔 Sad' }"
            >
              😔 Sad
            </button>
          </div>
          <div class="buttons is-centered">
            <button
              class="button is-info"
              @click="data.mood = '😟 Worried'"
              :class="{ active: data.mood === '😟 Worried' }"
            >
              😟 Worried
            </button>
            <button
              class="button is-warning"
              @click="data.mood = '😐 Neutral'"
              :class="{ active: data.mood === '😐 Neutral' }"
            >
              😐 Neutral
            </button>
            <button
              class="button is-danger"
              @click="data.mood = '😴 Tired'"
              :class="{ active: data.mood === '😴 Tired' }"
            >
              😴 Tired
            </button>
            <button
              class="button is-dark"
              @click="data.mood = '😡 Angry'"
              :class="{ active: data.mood === '😡 Angry' }"
            >
              😡 Angry
            </button>
          </div>
          <h3 class="title is-3">Your Day so Far</h3>
          <div class="field">
            <label class="label is-medium">Select a Date</label>
            <div class="control">
              <input class="input is-medium" type="date" v-model="data.date" />
            </div>
          </div>

          <article class="media">
            <div class="media-content">
              <div class="field">
                <p class="control">
                  <textarea
                    class="textarea is-medium"
                    placeholder="Add a comment..."
                    v-model="data.comment"
                  ></textarea>
                </p>
              </div>
            </div>
          </article>
          <button
            id="submit"
            class="button is-primary"
            @click="moodStore.addMood(data.mood, data.date, data.comment)"
          >
            Save Mood
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: #4caf50;
  color: white;
}
</style>
