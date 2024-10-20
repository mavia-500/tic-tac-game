import React from 'react'
import Board from './Board';
import { useState } from 'react';
const Result = ({colums, generateCombinations,setValue}) => {
    const [winner, setWinner] = useState(null)

    const checkWinner = (currentArr) => {
        const combinations = generateCombinations();
        for (let i = 0; i < combinations.length; i++) {
            const combo = combinations[i];
            const firstValue = currentArr[combo[0]];

            if (!firstValue) continue;

            let isWinner = true;

            for (let j = 1; j < combo.length; j++) {
                if (currentArr[combo[j]] !== firstValue) {
                    isWinner = false; break;
                }
            }

            if (isWinner) {
                setWinner(firstValue);
                return;
            }
        }
    };
  return (
    <>
     <Board colums={colums} setValue={setValue} checkWinner={checkWinner} winner={winner} setWinner={setWinner} />
      
      {/* <Board checkWinner={checkWinner}/> */}
    </>
  )
}

export default Result
