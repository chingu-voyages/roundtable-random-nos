const calculateShannonEntropy = (randomNos) => {
  const frequency = {}
  const totalElements = randomNos.length

  // Count frequency of each value
  randomNos.forEach((value) => {
    frequency[value] = (frequency[value] || 0) + 1
  })

  // Calculate entropy
  let entropy = 0.0
  Object.values(frequency).forEach((freq) => {
    const probability = freq / totalElements
    entropy -= probability * (Math.log2(probability) || 0)
  })

  return entropy
  
}

export default calculateShannonEntropy