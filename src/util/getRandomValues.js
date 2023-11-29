import axios from 'axios'

const getRandomValues = async (noBytesToCreate) => {
  if (noBytesToCreate <= 0) {
    return -1
  }

  const connectionURL = import.meta.env.VITE_API_URL.concat('/getRandomValues?length=', noBytesToCreate)
  const randomValues = axios.get(connectionURL)
  .then((response) => {
    return response.data.randomValues
  })
  .catch((error) => {
    console.log('Axios error: ', error.toJSON())
  })
  return randomValues
}

export default getRandomValues