import {createLocalStore} from '../lib/stores/local'

export const publicKeyStore = createLocalStore('pub')
export const privateKeyStore = createLocalStore('priv')
