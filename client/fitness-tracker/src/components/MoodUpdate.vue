<script setup lang="ts">
import { ref } from 'vue'
import { api } from '@/services/myFetch'

const emit = defineEmits(['close', 'saved'])
const activeUserId = 1

const form = ref({
  mood: '',
  date: '',
  comment: '',
})

async function submitMood() {
  try {
    await api(`/moods/${activeUserId}`, {
      mood: form.value.mood,
      date: form.value.date,
      comment: form.value.comment,
    })
    // form.value = {
    //   mood: '',
    //   date: '',
    //   comment: '',
    // }

    emit('saved')
    emit('close')
  } catch (err) {
    console.error('Error submitting mood:', err)
  }
}
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="box has-text-centered">
          <h3 class="title is-3">How are you feeling today?</h3>

          <!-- Mood Buttons -->
          <div class="buttons is-centered">
            <button
              class="button is-warning"
              @click="form.mood = '😄 Excited'"
              :class="{ active: form.mood === '😄 Excited' }"
            >
              😄 Excited
            </button>

            <button
              class="button is-success"
              @click="form.mood = '😊 Happy'"
              :class="{ active: form.mood === '😊 Happy' }"
            >
              😊 Happy
            </button>

            <button
              class="button is-success"
              @click="form.mood = '😌 Calm'"
              :class="{ active: form.mood === '😌 Calm' }"
            >
              😌 Calm
            </button>

            <button
              class="button is-info"
              @click="form.mood = '😔 Sad'"
              :class="{ active: form.mood === '😔 Sad' }"
            >
              😔 Sad
            </button>
          </div>

          <div class="buttons is-centered">
            <button
              class="button is-info"
              @click="form.mood = '😟 Worried'"
              :class="{ active: form.mood === '😟 Worried' }"
            >
              😟 Worried
            </button>

            <button
              class="button is-warning"
              @click="form.mood = '😐 Neutral'"
              :class="{ active: form.mood === '😐 Neutral' }"
            >
              😐 Neutral
            </button>

            <button
              class="button is-danger"
              @click="form.mood = '😴 Tired'"
              :class="{ active: form.mood === '😴 Tired' }"
            >
              😴 Tired
            </button>

            <button
              class="button is-dark"
              @click="form.mood = '😡 Angry'"
              :class="{ active: form.mood === '😡 Angry' }"
            >
              😡 Angry
            </button>
          </div>

          <!-- Date -->
          <h3 class="title is-3">Your Day so Far</h3>
          <div class="field">
            <label class="label is-medium">Select a Date</label>
            <div class="control">
              <input class="input is-medium" type="date" v-model="form.date" />
            </div>
          </div>

          <!-- Comment -->
          <article class="media">
            <div class="media-content">
              <div class="field">
                <textarea
                  class="textarea is-medium"
                  placeholder="Add a comment..."
                  v-model="form.comment"
                ></textarea>
              </div>
            </div>
          </article>

          <!-- Submit -->
          <button class="button is-primary" @click="submitMood">Save Mood</button>
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
