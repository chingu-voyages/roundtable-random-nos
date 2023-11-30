const DisplayRandomNos = ({ randomNos }) => {
  return randomNos !== null && randomNos != []
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