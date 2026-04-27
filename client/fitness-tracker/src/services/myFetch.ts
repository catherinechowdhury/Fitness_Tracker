const API_BASE_URL = import.meta.env.VITE_API_ROOT

const token = localStorage.getItem('token')

export async function rest<T>(endpoint: string, data?: unknown, options?: RequestInit): Promise<T> {
  options = {
    method: data ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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

export function apiGet<T>(url: string) {
  return api<T>(url)
}

export function apiPost<T>(url: string, data: unknown) {
  return api<T>(url, data, { method: 'POST' })
}

export function apiPatch<T>(url: string, data: unknown) {
  return api<T>(url, data, { method: 'PATCH' })
}

export function apiDelete<T>(url: string) {
  return api<T>(url, undefined, { method: 'DELETE' })
}
