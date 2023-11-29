import chinguLogo from './assets/Chingu_Logo_small.png'
import getRandomValues from './util/getRandomValues.js'
import JSChaCha20 from './util/jschacha20.js'
import './App.css'

let randomNos = []

const generateRandomNos = (numberToGenerate) => {
  console.log('generateRandomNos entered...')
  return new Promise((resolve, reject) => {
    // Since crypto.randomBytes is only used in NodeJS call the BE to generate them
    const keyPromise = getRandomValues(32)
    const noncePromise = getRandomValues(12)
    const dataPromise = getRandomValues(4096)

    Promise.all([keyPromise, noncePromise, dataPromise]).then((values) => {
      const key = new Uint8Array(Object.values(values[0]))
      const nonce = new Uint8Array(Object.values(values[1]))
      const data = new Uint8Array(Object.values(values[2]))
    
      for (let i = 0; i < numberToGenerate; ++i) {
        const encoder = new JSChaCha20(key, nonce)
        const encr = encoder.encrypt(data)
        console.log('generateRandomNos - encr: ', encr)
    
        // Generate a random number in the range 0-100
        const rn = parseInt(encr) % encr.length
        randomNos.push(rn)
        console.log('rn: ', rn)
      }
      resolve("Done")
    })
  })
}

const DisplayRandomNos = async (randomNos) => {
  return (randomNos.length !== 0
      ? (randomNos.map(randomNo => <li key={ randomNo }></li>))
      : null
  )
}

const App = () => {
  console.log('starting app...')
  generateRandomNos(1)
  .then(() => {
    console.log('randomNos: ', randomNos)
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
            <DisplayRandomNos/>
          </ol>
        </div>
      </>
    )
  })
}

export default App
