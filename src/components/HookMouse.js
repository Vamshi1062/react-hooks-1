import React, { useEffect, useState } from 'react'

export const HookMouse = () => {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)
        return()=>{
            console.log('component unMounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    const logMousePosition=e=>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    return (
        <div>
            X-{x} Y-{y}
        </div>
    )
}
