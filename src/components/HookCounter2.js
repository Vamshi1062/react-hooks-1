import React, { useState } from 'react'

export const HookCounter2 = () => {
   const[count,setCount]= useState(0)
   const incrementFive=()=>{
    for(let i=0;i<5;i++){
        setCount(prevCount=>prevCount+1)
    }
   }
    return (
        <div>
            Count:{count}
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>incrementCount</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>decrementCount</button>
            <button onClick={()=>setCount(0)}>reset</button>
            <button onClick={incrementFive}>incrementFive</button>
        </div>
    )
}
