import { defineStore } from 'pinia'
import type { Workout } from '@/types/workout'

export const useWorkoutStore = defineStore('workout', {
  state: () => ({
    workouts: [] as Workout[],
    nextId: 1,
  }),

  actions: {
    addWorkout(workout: Omit<Workout, 'id'>) {
      this.workouts.push({
        ...workout,
        id: this.nextId,
      })

      this.nextId++
    },

    clearWorkouts() {
      this.workouts = []
    },

    removeWorkout(index: number) {
      this.workouts.splice(index, 1)
    },
  },
})
