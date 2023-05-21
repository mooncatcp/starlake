import type {Subscriber} from "svelte/store";

export const createLocalStore = (key: string) => {
  const subscribers = new Map<symbol, Subscriber<string | null>>

  return {
    subscribe(sub: Subscriber<string | null>) {
      const key = Symbol()
      subscribers.set(key, sub)

      return () => subscribers.delete(key)
    },
    get() {
      return window.localStorage.getItem(key)
    },
    set(val: string) {
      window.localStorage.setItem(key, val)
    },
    update(updater: (a: string | null) => string | null) {
      const newValue = updater(window.localStorage.getItem(key))

      if (newValue === null) {
        window.localStorage.removeItem(key)
      } else {
        window.localStorage.setItem(key, newValue)
      }

      for (const sub of subscribers.values()) {
        sub(newValue)
      }
    }
  }
}
