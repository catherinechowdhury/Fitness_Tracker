import { defineStore } from 'pinia'

export type Workout = {
  date: string
  type: string
  duration: string
  moodBefore: string
  moodAfter: string
}

export const useWorkoutStore = defineStore('workout', {
  state: () => ({
    workouts: [] as Workout[],
  }),

  actions: {
    addWorkout(workout: Workout) {
      this.workouts.push(workout)
    },

    clearWorkouts() {
      this.workouts = []
    },

    removeWorkout(index: number) {
      this.workouts.splice(index, 1)
    },
  },
})
