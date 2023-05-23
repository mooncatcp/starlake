import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWelcomeStore = defineStore('welcome', () => {
  const stage = ref(0)

  const next = () => {
    stage.value += 1
  }
  const previous = () => {
    stage.value -= 1
  }

  // @ts-ignore
  window.next = next
  // @ts-ignore
  window.prev = previous

  return {
    stage,
    next,
    previous,
  }
})
