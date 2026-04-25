<script setup lang="ts">
import { ref } from 'vue'
import { useWorkoutStore } from '@/stores/workout'

const emit = defineEmits(['close'])
const workoutStore = useWorkoutStore()

const form = ref({
  date: '',
  type: '',
  duration: '',
  moodBefore: '',
  moodAfter: '',
})

function submitWorkout() {
  workoutStore.addWorkout({
    date: form.value.date,
    type: form.value.type,
    duration: form.value.duration,
    moodBefore: form.value.moodBefore,
    moodAfter: form.value.moodAfter,
  })

  emit('close')
}
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add a Workout</p>
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>

      <section class="modal-card-body">
        <div class="box">
          <h3 class="title is-3">Workout</h3>

          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" type="date" v-model="form.date" />
            </div>
          </div>

          <div class="field">
            <label class="label">Type</label>
            <div class="select is-info">
              <select v-model="form.type">
                <option disabled value="">Select Workout</option>
                <option>Run</option>
                <option>Walk</option>
                <option>Yoga</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label class="label">Duration</label>
            <div class="select is-info">
              <select v-model="form.duration">
                <option disabled value="">Select Duration</option>
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>60 minutes</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label class="label">Mood Before</label>
            <div class="select is-info">
              <select v-model="form.moodBefore">
                <option disabled value="">Select Mood</option>
                <option>Happy</option>
                <option>Neutral</option>
                <option>Sad</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label class="label">Mood After</label>
            <div class="select is-info">
              <select v-model="form.moodAfter">
                <option disabled value="">Select Mood</option>
                <option>Happy</option>
                <option>Neutral</option>
                <option>Sad</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <footer class="modal-card-foot">
        <button class="button is-success" @click="submitWorkout">Save</button>
        <button class="button" @click="$emit('close')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-card {
  width: 400px;
}
</style>
