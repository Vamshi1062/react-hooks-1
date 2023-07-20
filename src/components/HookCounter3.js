import React, { useState } from 'react'

export const HookCounter3 = () => {

    const[name,setName]=useState({
        firstName:'',
        lastName:''
    })
    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
                <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
                <h2>Your First Name is : {name.firstName}</h2>
                <h2>Your Last Name is : {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

//useState does not automatically merge and update the object
//This is the key Differenece to setState which you came across in class Components
//setState  will merge the state where as  useState hook setter function 
//will not merge the state  .You have to do it manully use spread operator to handle manual merge 
//copy every property in the name object and then just override firstname field with a different value