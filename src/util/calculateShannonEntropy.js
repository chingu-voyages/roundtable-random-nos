const calculateShannonEntropy = (randomNos) => {
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
}

export default calculateShannonEntropy