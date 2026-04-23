import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWorkoutStore = defineStore('workout', () => {
  const workouts = ref([])

  async function fetchWorkouts() {
    const res = await fetch('http://localhost:3000/workouts')
    workouts.value = await res.json()
  }

  async function addWorkout(entry) {
    const res = await fetch('http://localhost:3000/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    })

    const newWorkout = await res.json()
    workouts.value.push(newWorkout)
  }

  return { workouts, fetchWorkouts, addWorkout }
})
