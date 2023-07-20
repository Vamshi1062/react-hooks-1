import React, { useReducer } from 'react'
const initState={
    firstCounter:0
}
const reducer=(state,action)=>{
      switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {firstCounter:state.firstCounter-action.value}
        case 'reset':
                return initState
        default:
            return state
      }
}
export const Counter2 = () => {
   
    const[count,dispatch]=useReducer(reducer,initState)
    return (
        
        <div>
            count:{count.firstCounter}

            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment',value:5})}>Increment5</button>
            <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}
