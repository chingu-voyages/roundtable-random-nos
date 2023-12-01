const calculateShannonEntropy = (randomNos) => {
  /*
  // Convert the input array of random numbers into a string
  const inputString = randomNos.join('')

  // Count occurrences of each symbol in the input string
  const frequencies = {};
  for (let i = 0; i < inputString.length; i++) {
    const symbol = inputString[i];
    if (frequencies[symbol]) {
      frequencies[symbol]++;
    } else {
      frequencies[symbol] = 1;
    }
  }

  // Calculate entropy
  let entropy = 0;
  const length = inputString.length;
  for (const symbol in frequencies) {
    const probability = frequencies[symbol] / length;
    entropy -= probability * (Math.log2(probability));
  }

  return entropy;
  */
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