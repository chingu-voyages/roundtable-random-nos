import chinguLogo from './assets/Chingu_Logo_small.png'
import { randomBytes } from 'randombytes'
import JSChaCha20 from './util/jschacha20.js'
import './App.css'

let randomNos = []

const generateRandomNos = (numberToGenerate) => {
  // Since crypto.randomBytes is only used in NodeJS rely instead on nanoid
  const key = new Uint8Array(randomBytes(32))
  const nonce = new Uint8Array(randomBytes(12))
  const data = new Uint8Array(randomBytes(4096))

  for (let i = 0; i < numberToGenerate; i++) {
    const encoder = new JSChaCha20(key, nonce)
    const encr = encoder.encrypt(data)

    // Generate a random number in the range 0-100
    const rn = parseInt(encr) % 101
    randomNos.push(rn)
    console.log('rn: ', rn)
  }
}

const DisplayRandomNos = (randomNos) => {
  return randomNos.map(randomNo =>
    <li key={ randomNo }></li>
  )
}

const App = () => {
  generateRandomNos(100)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={ chinguLogo } className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Chingu Roundtable - Implementing & Evaluating a CSPRNG</h1>
      <div>
        <DisplayRandomNos/>
      </div>
    </>
  )
}

export default App
