import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const activeUserId = ref<number | null>(null)

  function setUser(id: number) {
    activeUserId.value = id
  }

  return {
    activeUserId,
    setUser,
  }
})
