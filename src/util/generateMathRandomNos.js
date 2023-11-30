const generateMathRandomNos = (numberToGenerate) => {
  let randomNos = []
    
  for (let i = 0; i < numberToGenerate; ++i) {
    // Generate a random number in the range 0-256
    const MAX = 256
    const MIN = 0
    const rn = Math.floor(Math.random() * (MAX-MIN) + MIN)
    randomNos.push(rn)
  }
  return randomNos
}

export default generateMathRandomNos