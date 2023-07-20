import React, { useReducer } from 'react'
const initState={
    firstCounter:0
}
const reducer=(state,action)=>{
      switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter+1}
        case 'decrement':
            return {firstCounter:state.firstCounter-1}
        case 'reset':
                return initState
        default:
            return state
      }
}
export const Counter1 = () => {
   
    const[count,dispatch]=useReducer(reducer,initState)
    return (
        
        <div>
            count:{count.firstCounter}
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}
