import React from 'react'
import { useState } from 'react'
const Board = () => {
    const [btnArr, setbtnArr] = useState(Array(9).fill(null));
    const data = [...btnArr]
    const [turn, setTurn] = useState(true)
    const [winner, setWinner] = useState(null)

    const clickHandler = (value, index) => {

        if (!value) {
            data[index] = turn ? 'X' : "O";
            setbtnArr(data)
            setTurn(!turn)
           result()
        }
        

    }

    const result = () => {
        const combination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < combination.length; i++) {
            const [a, b, c] = combination[i]
            // console.log(btnArr[a],btnArr[b],btnArr[c])
            console.log(data)
            if (data[a] && data[a] == data[b] && data[b] == data[c] && data[a]==data[c]) {
                setWinner(data[a])
                console.log("winner as",data[a])
                // return combination[i]
            }
            return null;

        }

    }
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className=" grid grid-cols-3  gap-4 ">
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
            {winner && <div className='bg-red-600 p-3'>here is the winner{winner}</div>};
        </div>)
}

export default Board
