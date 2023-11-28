import axios from 'axios'

const getRandomValues = (noBytesToCreate) => {
  console.log('getRandomValues - noBytesToCreate: ', noBytesToCreate)
  if (noBytesToCreate <= 0) {
    return -1
  }

  const connectionURL = import.meta.env.VITE_API_URL.concat('/getRandomValues?length=', noBytesToCreate)
  axios.get(connectionURL)
  .then((response) => {
    console.log('getRandomValues - response: ', response.data)
    return response.data.randomValues
  })
  .catch((error) => {
    console.log('Axios error: ', error.toJSON())
  })
}

export default getRandomValues