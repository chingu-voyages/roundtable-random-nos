const DisplayRandomNos = ({ randomNos }) => {
  return randomNos !== null && randomNos != []
    ? ( 
        randomNos.map((randomNo, index) => 
          <li key={ `${index}-${randomNo}` }>
            { randomNo }
          </li>
        )
      )
    : ('')
    }

export default DisplayRandomNos