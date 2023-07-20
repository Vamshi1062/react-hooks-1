import React, { useState } from 'react'

export const HookCounter4 = () => {
    const[items,setItems]=useState([])
    const addItem=()=>{
       setItems([...items,{
           id:items.length,
           value:Math.floor(Math.random()*10)+1
        }
       ]) 
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(i=>(<li>{i.value}</li>))
                }
            </ul>
        </div>
    )
}
