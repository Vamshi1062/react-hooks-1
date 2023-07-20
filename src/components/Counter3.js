import React, { useReducer } from 'react'
const initState=0
const reducer=(state,action)=>{
      switch(action.type){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
                return initState
        default:
            return state
      }
}
export const Counter3 = () => {
   
    const[count,dispatch]=useReducer(reducer,initState)
    const[countTwo,dispatchTwo]=useReducer(reducer,initState)
    return (
        
        <div>
            <div>count:{count}</div>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>

         <div>
         <div>count:{countTwo}</div>
         <button onClick={()=>dispatchTwo({type:'increment'})}>Increment</button>
         <button onClick={()=>dispatchTwo({type:'decrement'})}>Decrement</button>
         <button onClick={()=>dispatchTwo({type:'reset'})}>Reset</button>
         </div>
        </div>
    )
}
