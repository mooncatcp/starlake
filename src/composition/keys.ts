import { useKeysStore } from '../stores/keys'
import { computed } from 'vue'
import { importKey, importPem } from '../lib/crypto'

export const useKeys = () => {
  const store = useKeysStore()
  const loggedIn = computed(() => store.value.private !== null && store.value.public !== null)
  const getPair = async () => {
    if (!loggedIn.value) {
      return null
    }
    const publicKey = await importKey(importPem(store.value.public!, 'public'), 'public')
    const privateKey = await importKey(importPem(store.value.private!, 'private'), 'private')

    return {
      privateKey,
      publicKey,
    }
  }

  return {
    loggedIn,
    getPair,
  }
}
