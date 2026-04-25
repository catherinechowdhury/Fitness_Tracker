export type Workout = {
  id: number
  userId: number
  date: string
  type: string
  duration: string
  moodBefore: string
  moodAfter: string
}

export type Mood = {
  id: number
  userId: number
  date: string
  mood: string
  note?: string
}
