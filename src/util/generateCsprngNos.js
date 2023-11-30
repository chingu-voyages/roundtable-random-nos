import getRandomValues from './getRandomValues.js'
import JSChaCha20 from './jschacha20.js'

const generateCsprngNos = (numberToGenerate) => {
  return new Promise((resolve) => {
    // Since crypto.randomBytes is only used in NodeJS call the BE to generate them
    const keyPromise = getRandomValues(32)
    const noncePromise = getRandomValues(12)
    const dataPromise = getRandomValues(4096)

    Promise.all([keyPromise, noncePromise, dataPromise]).then((values) => {
      const key = new Uint8Array(Object.values(values[0]))
      const nonce = new Uint8Array(Object.values(values[1]))
      const data = new Uint8Array(Object.values(values[2]))

      let randomNos = []
    
      for (let i = 0; i < numberToGenerate; ++i) {
        const encoder = new JSChaCha20(key, nonce)
        const encr = encoder.encrypt(data)
    
        // Generate a random number in the range of values from 0 to the 
        // maximum value of an unsigned 8-bit integer. This is automatic 
        // for ChaCha20 since it produces an encrypted result that's an
        // array of unsigned 8-bit integers.

        // Note that our use of Math.random() to generate a "random" index
        // into the array of encrypted data should be re-evaluated. This is
        // because Math.random() uses a PRNG algorithm.
        const MAX = encr.length
        const MIN = 0
        const randomIndex = Math.floor(Math.random() * (MAX-MIN) + MIN)
        const rn = encr[randomIndex]
        randomNos.push(rn)
      }
      resolve(randomNos)
    })
  })
}

export default generateCsprngNos