import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWorkoutStore = defineStore('workout', () => {
  const workouts = ref<{ date: string; type: string; duration: string; moodBefore: string; moodAfter: string }[]>([])

  function addWorkout(date: string, type: string, duration: string, moodBefore: string, moodAfter: string) {
    const entry = { date, type, duration, moodBefore, moodAfter }
    workouts.value.push(entry)
  }

  return { workouts, addWorkout }
})