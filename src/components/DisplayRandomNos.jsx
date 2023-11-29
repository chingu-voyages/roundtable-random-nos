export const DisplayRandomNos = ({ randomNos }) => 
randomNos.map(randomNo => 
  <li key={ randomNo }>
    { randomNo }
  </li>
)
