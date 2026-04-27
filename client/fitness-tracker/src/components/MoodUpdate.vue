<script setup lang="ts">
import { ref, watch } from 'vue'
import { api } from '@/services/myFetch'
import type { Mood } from '@/types/moods'
import { currentUser } from '@/services/auth'
const emit = defineEmits(['close', 'saved'])

const props = defineProps<{
  mood?: Mood | null
}>()

const form = ref({
  id: 0,
  date: '',
  mood: '',
  comment: '' as string | null,
})

watch(
  () => props.mood,
  (m) => {
    if (m) {
      form.value = {
        id: m.id,
        date: m.date,
        mood: m.mood,
        comment: m.comment ?? '',
      }
    } else {
      form.value = {
        id: 0,
        date: '',
        mood: '',
        comment: '' as string | null,
      }
    }
  },
  { immediate: true },
)

async function submitMood() {
  try {
    if (!currentUser.value) return
    if (!form.value.mood || !form.value.date) {
      alert('Please select a mood and date.')
      return
    }

    if (form.value.id) {
      await api(
        `/moods/${form.value.id}`,
        {
          mood: form.value.mood,
          date: form.value.date,
          comment: form.value.comment,
        },
        { method: 'PATCH' },
      )
    } else {
      await api(`/moods`, {
        mood: form.value.mood,
        date: form.value.date,
        comment: form.value.comment,
      })
    }

    emit('saved')
    emit('close')

    form.value = {
      id: 0,
      date: '',
      mood: '',
      comment: '',
    }
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
    <button class="button" @click="$emit('close')">Cancel</button>
  </div>
</template>

<style scoped>
.active {
  background-color: #4caf50;
  color: white;
}
</style>
