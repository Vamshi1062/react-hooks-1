import React, { useEffect, useState } from 'react'

export const IntervalHookCounter = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        // function doSomething(){
        //     console.log(someProps)
        // }
        // doSomething()
        const interval=setInterval(tick,1000)
        return()=>{
            clearInterval(interval)
        }
    },[])
    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }
    return (
        <div>
            count-{count}
        </div>
    )
}
