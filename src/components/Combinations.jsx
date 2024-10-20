import React from 'react'
import Result from './Result';

const Combinations = ({colums, setValue}) => {
    

    const generateCombinations = () => {
        const combinations = [];

        // Rows
        for (let i = 0; i < colums; i++) {
            // debugger;
            const row = [];
            
            for (let j = 0; j < colums; j++) {
                row.push(i * colums + j);
                
            }


            combinations.push(row);
            console.log(i, combinations)
        }

        // Columns
        for (let i = 0; i < colums; i++) {
            const col = [];
            for (let j = 0; j < colums; j++) {
                col.push(i + j * colums);
            }
            combinations.push(col);
        }

        // Diagonal 1 (Top-left to bottom-right)
        const diag1 = [];
        for (let i = 0; i < colums; i++) {
            diag1.push(i * colums + i);
        }
        combinations.push(diag1);

        // Diagonal 2 (Top-right to bottom-left)
        const diag2 = [];
        for (let i = 0; i < colums; i++) {
            diag2.push(i * colums + (colums - i - 1));
        }
        combinations.push(diag2);

        return combinations;
    }
  return (
    <>
       <Result colums={colums} setValue={setValue} generateCombinations={generateCombinations}  />
    </>
  )
}

export default Combinations
