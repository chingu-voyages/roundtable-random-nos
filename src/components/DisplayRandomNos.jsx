const DisplayRandomNos = ({ randomNos }) => {
  return randomNos !== null 
    ? ( 
        randomNos.map(randomNo => 
          <li key={ randomNo }>
            { randomNo }
          </li>
        )
      )
    : ('')
    }

export default DisplayRandomNos