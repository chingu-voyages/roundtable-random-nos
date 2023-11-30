import './App.css'
import chinguLogo from './assets/Chingu_Logo_small.png'
import { useEffect, useState } from 'react'
import generateCsprngNos from './util/generateCsprngNos.js'
import generateMathRandomNos from './util/generateMathRandomNos.js'
import calculateStdDev from './util/calculateStdDev.js'
import DisplayRandomNos from './components/DisplayRandomNos.jsx'

export default function App() {
  const [noToGenerate, setNoToGenerate] = useState(0);
  const [triggerCsprng, setTriggerCsprng] = useState(false)
  const [csprngRandomNos, setCsprngRandomNos] = useState(null)
  const [csprngRandomStdDev, setCsprngRandomStdDev] = useState(0)

  const [triggerMathRandom, setTriggerMathRandom] = useState(false)
  const [mathRandomNos, setMathRandomNos] = useState(null)
  const [mathRandomStdDev, setMathRandomStdDev] = useState(0)

  //const noToGenerate = 100

  useEffect(() => {
    // Generate the desired number of CSPRNG random numbers
    if (triggerCsprng) {
      setCsprngRandomNos(0)
      generateCsprngNos(noToGenerate) // TODO: Determine the number of numbers to generate based on user input
      .then((randomNos) => {
        setTriggerCsprng(false)
        setCsprngRandomNos(randomNos)
        setCsprngRandomStdDev(calculateStdDev(randomNos))
        console.log('App - CSPRNG - randomNos.length: ', randomNos.length, ' randomNos: ', randomNos)
      })
    }

    // Generate the desired number of Math.random() numbers
    if (triggerMathRandom) {
      const randomNos = generateMathRandomNos(noToGenerate) // TODO: Determine the number of numbers to generate based on user input
      setTriggerMathRandom(false)
      setMathRandomNos(randomNos)
      setMathRandomStdDev(calculateStdDev(randomNos))
      console.log('App - Math.random() - randomNos.length: ', randomNos.length, ' randomNos: ', randomNos)
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
          </div>
          <ol>
            <DisplayRandomNos randomNos={ mathRandomNos } />
          </ol>
        </span>
      </div>

    </div>
  )
}