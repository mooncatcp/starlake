export const str2ab = (str: string) => {
  const buf = new ArrayBuffer(str.length)
  const bufView = new Uint8Array(buf)
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i)
  }
  return buf
}

export const ab2str = (buf: ArrayBuffer) => {
  return String.fromCharCode.apply(null, Array.from(new Uint8Array(buf)))
}

export const exportPem = (buf: ArrayBuffer, type: 'public' | 'private') => {
  const exportedAsString = ab2str(buf)
  const exportedAsBase64 = window.btoa(exportedAsString)
  return `-----BEGIN ${type.toUpperCase()} KEY-----\n${exportedAsBase64}\n-----END ${type.toUpperCase()} KEY-----`
}

export const importPem = (pem: string, type: 'public' | 'private') => {
  const pemHeader = `-----BEGIN ${type.toUpperCase()} KEY-----`
  const pemFooter = `-----END ${type.toUpperCase()} KEY-----`
  const pemContents = pem.substring(
    pemHeader.length,
    pem.length - pemFooter.length,
  )
  const binaryDerString = window.atob(pemContents)
  return str2ab(binaryDerString)
}

export const ALL_KEY_USAGES: KeyUsage[] = [
  'sign', 'verify', 'encrypt', 'decrypt', 'deriveKey', 'deriveBits',
  'wrapKey', 'unwrapKey',
]

export const sign = (data: ArrayBuffer, key: CryptoKey) => {
  return window.crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, data)
}

export const verify = (data: ArrayBuffer, signature: ArrayBuffer, publicKey: CryptoKey) => {
  return window.crypto.subtle.verify('RSASSA-PKCS1-v1_5', publicKey, signature, data)
}

export const generateKeyPair = () => {
  return window.crypto.subtle.generateKey(
    {
      name: 'RSASSA-PKCS1-v1_5',
      modulusLength: 1024,
      publicExponent: new Uint8Array([ 1, 0, 1 ]),
      hash: 'SHA-256',
    },
    true,
    ALL_KEY_USAGES,
  )
}

export const importKey = (data: ArrayBuffer, type: 'private' | 'public' | 'secret') => {
  switch (type) {
  case 'public':
    return window.crypto.subtle.importKey(
      'spki',
      data,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      true,
      ALL_KEY_USAGES,
    )
  case 'secret':
    return window.crypto.subtle.importKey(
      'raw',
      data,
      'AES-CBC',
      true,
      ALL_KEY_USAGES,
    )
  case 'private':
    return window.crypto.subtle.importKey(
      'pkcs8',
      data,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      true,
      ALL_KEY_USAGES,
    )
  }
}

export const exportKey = (key: CryptoKey) => {
  switch (key.type) {
  case 'private':
    return window.crypto.subtle.exportKey('pkcs8', key)
  case 'public':
    return window.crypto.subtle.exportKey('spki', key)
  case 'secret':
    return window.crypto.subtle.exportKey('raw', key)
  }
}
