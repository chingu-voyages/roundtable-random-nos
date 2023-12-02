import './App.css'
import chinguLogo from './assets/Chingu_Logo_small.png'
import { useEffect, useState } from 'react'
import calculateShannonEntropy from './util/calculateShannonEntropy.js'
import calculateStdDev from './util/calculateStdDev.js'
import DisplayRandomNos from './components/DisplayRandomNos.jsx'
import generateCsprngNos from './util/generateCsprngNos.js'
import generateMathRandomNos from './util/generateMathRandomNos.js'

export default function App() {
  const [noToGenerate, setNoToGenerate] = useState(0)

  const [triggerCsprng, setTriggerCsprng] = useState(false)
  const [csprngRandomNos, setCsprngRandomNos] = useState(null)
  const [csprngRandomStdDev, setCsprngRandomStdDev] = useState(0)
  const [csprngRandomEntropy, setCsprngRandomEntropy] = useState(0)

  const [triggerMathRandom, setTriggerMathRandom] = useState(false)
  const [mathRandomNos, setMathRandomNos] = useState(null)
  const [mathRandomStdDev, setMathRandomStdDev] = useState(0)
  const [mathRandomEntropy, setMathRandomEntropy] = useState(0)

  useEffect(() => {
    // Generate the desired number of CSPRNG random numbers
    if (triggerCsprng) {
      setCsprngRandomNos(0)
      generateCsprngNos(noToGenerate) 
      .then((randomNos) => {
        setTriggerCsprng(false)
        console.time('Generating CSPRNG numbers took...')
        setCsprngRandomNos(randomNos)
        console.timeLog('Generating CSPRNG numbers took...')
        setCsprngRandomStdDev(calculateStdDev(randomNos))
        setCsprngRandomEntropy(calculateShannonEntropy(randomNos))
      })
    }

    // Generate the desired number of Math.random() numbers
    if (triggerMathRandom) {
      const randomNos = generateMathRandomNos(noToGenerate) 
      setTriggerMathRandom(false)
      console.time('Generating Math.random() numbers took...')
      setMathRandomNos(randomNos)
      console.timeLog('Generating Math.random() numbers took...')
      setMathRandomStdDev(calculateStdDev(randomNos))
      setMathRandomEntropy(calculateShannonEntropy(randomNos))
    }
  }, [noToGenerate, triggerCsprng, triggerMathRandom])
  
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={ chinguLogo } className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Chingu Roundtable - Implementing & Evaluating a CSPRNG</h1>

      <div>
        <label htmlFor="notogenerate">Numbers to generate: </label>
        <input type="number" id="notogenerate" name="notogenerate" required minLength="1" maxLength="5" 
          value={ noToGenerate } // ...force the input's value to match the state variable...
          onChange={event => setNoToGenerate(event.target.value)}/>
      </div>

      <div>
        <div className="left">
          <button onClick={() => setTriggerCsprng(true)}>
            Generate using CSPRNG
          </button>
          <div>
            <p>Standard Deviation: { csprngRandomStdDev }</p>
            <p>Shannon Entropy: { csprngRandomEntropy }</p>
          </div>
          <ol>
            <DisplayRandomNos randomNos={ csprngRandomNos } />
          </ol>
        </div>

        <span className="right">
          <button onClick={() => setTriggerMathRandom(true)}>
            Generate using Math.random()
          </button>
          <div>
            <p>Standard Deviation: { mathRandomStdDev }</p>
            <p>Shannon Entropy: { mathRandomEntropy }</p>
          </div>
          <ol>
            <DisplayRandomNos randomNos={ mathRandomNos } />
          </ol>
        </span>
      </div>

    </div>
  )
}