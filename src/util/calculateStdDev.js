const calculateStdDev = (arrayOfNumbers) => {
  // Creating the mean with Array.reduce
  const mean = arrayOfNumbers.reduce((acc, curr) => {
      return acc + curr
  }, 0) / arrayOfNumbers.length

  // Assigning (value - mean) ^ 2 to
  // every arrayOfNumbersay item
  arrayOfNumbers = arrayOfNumbers.map((k) => {
      return (k - mean) ** 2
  })

  const sum = arrayOfNumbers.reduce((acc, curr) => acc + curr, 0)
  const variance = sum / arrayOfNumbers.length

  return Math.sqrt(variance)
}

export default calculateStdDev