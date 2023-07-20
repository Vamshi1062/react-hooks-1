import React, { useReducer } from 'react'
const initState={
    firstCounter:0,
    secondCounter:0
}
const reducer=(state,action)=>{
      switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter-action.value}
        case 'increment2':
            return {...state,secondCounter:state.secondCounter+action.value}
        case 'decrement2':
            return {...state,secondCounter:state.secondCounter-action.value}
        case 'reset':
                return initState
        default:
            return state
      }
}
export const Counter2Action = () => {
   
    const[count,dispatch]=useReducer(reducer,initState)
    return (
        
        <div>
            count:{count.firstCounter}
            count:{count.secondCounter}

            <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment2',value:5})}>Increment5</button>
            <button onClick={()=>dispatch({type:'decrement2',value:5})}>Decrement5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}
