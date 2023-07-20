import React, { useContext } from 'react'
import { ComponentF } from './ComponentF'
import { CompanyContext, UserContext } from '../App'

export const ComponentE = () => {
    const user=useContext(UserContext)
    const company=useContext(CompanyContext)
    return (
        <div>
            <ComponentF/>
            {/* {user}-{company} */}
        </div>
    )
}
