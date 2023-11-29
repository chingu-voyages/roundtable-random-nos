import chinguLogo from './assets/Chingu_Logo_small.png'
import getRandomValues from './util/getRandomValues.js'
import JSChaCha20 from './util/jschacha20.js'
import './App.css'
import { DisplayRandomNos } from './components/DisplayRandomNos.jsx'

const generateRandomNos = (numberToGenerate) => {
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
    
        // Generate a random number in the range 0-100
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

const App = () => {
  generateRandomNos(5)
  .then((randomNos) => {
    console.log('App - randomNos.length: ', randomNos.length, ' randomNos: ', randomNos)
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={ chinguLogo } className="logo" alt="Vite logo" />
          </a>
        </div>
        <h1>Chingu Roundtable - Implementing & Evaluating a CSPRNG</h1>
        <div>
          <ol>
            <DisplayRandomNos randomNos={ randomNos }/>
          </ol>
        </div>
      </>
    )
  })
}

export default App
