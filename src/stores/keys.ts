import { useLocalStorage } from '@vueuse/core'

export interface KeysStore {
  private: string | null
  public: string | null
}

export const useKeysStore = () =>
  useLocalStorage<KeysStore>('keys', { private: null, public: null })
