
import React, {useContext}from 'react'
import { CompanyContext, UserContext } from '../App'
import { CountContext } from '../App'
export const ComponentF = () => {
    const countContext=useContext(CountContext)
    return (
        <div>
             ComponentF-{countContext.countState}
            <button onClick={()=>countContext.countDispatch("increment")}>Increment</button>
            <button onClick={()=>countContext.countDispatch("decrement")}>Decrement</button>
            <button onClick={()=>countContext.countDispatch("reset")}>Reset</button>
            {/* ComponentF
            <UserContext.Consumer>
                {
                    user=>{
                        return (
                            <CompanyContext.Consumer>
                                {
                                    company=><div>user context value {user},
                                    company context value {company}</div>
                                }
                            </CompanyContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer> */}
        </div>
    )
}
