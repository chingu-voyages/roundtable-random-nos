import './App.css'
import chinguLogo from './assets/Chingu_Logo_small.png'
import { useEffect, useState } from 'react'
import getRandomValues from './util/getRandomValues.js'
import JSChaCha20 from './util/jschacha20.js'
import calculateStdDev from './util/calculateStdDev.js'

import DisplayRandomNos from './components/DisplayRandomNos.jsx'

const generateMathRandomNos = (numberToGenerate) => {
  let randomNos = []
    
  console.log('generateRandomNos - numberToGenerate: ', numberToGenerate)
  for (let i = 0; i < numberToGenerate; ++i) {
    // Generate a random number in the range 0-100
    const MAX = 256
    const MIN = 0
    const rn = Math.floor(Math.random() * (MAX-MIN) + MIN)
    randomNos.push(rn)
  }
  return randomNos
}

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
    
      console.log('generateCsprngRandomNos - numberToGenerate: ', numberToGenerate)
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

export default function App() {
  const [triggerCsprng, setTriggerCsprng] = useState(false)
  const [csprngRandomNos, setCsprngRandomNos] = useState(null)
  const [csprngRandomStdDev, setCsprngRandomStdDev] = useState(0)

  const [triggerMathRandom, setTriggerMathRandom] = useState(false)
  const [mathRandomNos, setMathRandomNos] = useState(null)
  const [mathRandomStdDev, setMathRandomStdDev] = useState(0)

  useEffect(() => {
    // Generate the desired number of CSPRNG random numbers
    if (triggerCsprng) {
      generateCsprngNos(5) // TODO: Determine the number of numbers to generate based on user input
      .then((randomNos) => {
        setTriggerCsprng(false)
        setCsprngRandomNos(randomNos)
        setCsprngRandomStdDev(calculateStdDev(randomNos))
        console.log('App - CSPRNG - randomNos.length: ', randomNos.length, ' randomNos: ', randomNos)
      })
    }

    // Generate the desired number of Math.random() numbers
    if (triggerMathRandom) {
      const randomNos = generateMathRandomNos(5) / TODO: Determine the number of numbers to generate based on user input
      setTriggerMathRandom(false)
      setMathRandomNos(randomNos)
      setMathRandomStdDev(calculateStdDev(randomNos))
      console.log('App - Math.random() - randomNos.length: ', randomNos.length, ' randomNos: ', randomNos)
    }
  }, [triggerCsprng, triggerMathRandom])
  
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={ chinguLogo } className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Chingu Roundtable - Implementing & Evaluating a CSPRNG</h1>

      <div>
        <button onClick={() => setTriggerCsprng(true)}>
          Generate CSPRNG random numbers
        </button>
        <ol>
          <DisplayRandomNos randomNos={ csprngRandomNos } />
        </ol>
        <div>
          <p>Standard Deviation: { csprngRandomStdDev }</p>
        </div>
      </div>

      <div>
        <button onClick={() => setTriggerMathRandom(true)}>
          Generate Math.random() numbers
        </button>
        <ol>
          <DisplayRandomNos randomNos={ mathRandomNos } />
        </ol>
        <div>
          <p>Standard Deviation: { mathRandomStdDev }</p>
        </div>
      </div>
    </div>
  )
}