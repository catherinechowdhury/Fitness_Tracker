import { jwtDecode } from 'jwt-decode'
import { ref } from 'vue'

type UserToken = {
  id: number
  role: string
  exp: number
}

export const currentUser = ref<UserToken | null>(null)

export function loadUserFromToken() {
  const token = localStorage.getItem('token')
  if (!token) return

  try {
    currentUser.value = jwtDecode(token)
  } catch {
    currentUser.value = null
  }
}
