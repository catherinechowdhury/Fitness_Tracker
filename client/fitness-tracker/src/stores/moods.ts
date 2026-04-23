import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMoodsStore = defineStore('moods', () => {
  const moods = ref<{ mood: string; date: string; comment: string }[]>([])
  function addMood(mood: string, date: string, comment: string) {
    moods.value.push({ mood, date, comment })
  }

  return { moods, addMood }
})
