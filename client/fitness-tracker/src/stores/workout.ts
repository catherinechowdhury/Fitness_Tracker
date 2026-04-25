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
