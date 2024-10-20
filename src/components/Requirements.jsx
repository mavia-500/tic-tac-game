import React, { useState } from 'react'
import Board from './Board'
import Combinations from './Combinations';

const Requirements = () => {
    // debugger;
    const [colums,setColums]=useState();
    const [value,setValue]=useState(3);
    const submitHandler =()=>{
        if(colums>2 && colums<40){
            setValue(colums)
            
        }
        else{
            setValue(3)
            
        }

       
    }

    const  handleValue=(event)=>{
        
        setColums(event.target.value)
       
        

    }
    return (
       
        <div>
           
            <div className='flex justify-center'>
                <input onChange={handleValue} type='text' placeholder='number of colums ' className='border border-black' />
               <button onClick={submitHandler}  type='submit' className="bg-blue-500 text-white p-4 rounded hover:bg-blue-700"
                >Submit</button>
               
            </div>
            <Combinations colums={value} setValue={setValue}/>
           
           
            
        </div>
    )
}

export default Requirements
