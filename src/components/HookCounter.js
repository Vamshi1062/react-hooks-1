import React, { useState } from 'react'
//1.
export const HookCounter = () => {
    //array destructuring
    //2&3
    const [count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count : {count}</button>
        </div>
    )
}
