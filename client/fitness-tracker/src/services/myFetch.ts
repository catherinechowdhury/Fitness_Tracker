const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function rest<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
  options = {
    method: data ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  }
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options)

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json() as Promise<T>
}

export function api<T>(endpoint: string, data?: unknown, options?: RequestInit) {
  return rest<T>(endpoint, data, options)
}
