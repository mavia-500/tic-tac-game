import React from 'react'
import { useState, useEffect } from 'react'
const Board = ({ colums, checkWinner, winner,setWinner,setValue }) => {

    let alpha = colums * colums;

    const [btnArr, setbtnArr] = useState(Array(alpha).fill(null));

    const data = [...btnArr]
    const [turn, setTurn] = useState(true)


    useEffect(() => {
        setbtnArr(Array(colums * colums).fill(null));


    }, [colums]);


    const clickHandler = (value, index) => {
        
        if(!winner){
        if (!value) {
            const newArr = [...btnArr];
            newArr[index] = turn ? 'X' : 'O';
            setbtnArr(newArr);
            setTurn(!turn);
            checkWinner(newArr)
            console.log(winner)
            
        }
    }
    else{
        alert(`Here is Winner ${winner} Pleasa Retart The Game`)
    }

    }

    const restarter=()=>{
        setValue(3)
        console.log(colums)
        setbtnArr(Array(colums * colums).fill(null))
        setWinner(null)
        
        
    }


    return (
        <>

            <div className="flex justify-center items-center min-h-screen">
                <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${colums}, minmax(0, 1fr))` }}>
                    {btnArr.map((value, index) => (
                        <button
                            onClick={() => { clickHandler(value, index) }}
                            key={index}
                            className="bg-blue-500 text-white p-4 rounded hover:bg-blue-700"
                        >
                            {value}
                        </button>
                    ))}
                </div>

            </div>
            <div>
                {winner && <div className='bg-red-600 p-3 mb-9'>here is the winner{winner}</div>}


            </div>
            <div className=' flex justify-center items-center mb-9 '>
                <button onClick={restarter} className="bg-blue-500 text-white p-4 rounded hover:bg-blue-700"
                >Restart The Game</button>
            </div>
        </>)
}

export default Board;
