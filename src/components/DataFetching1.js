import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const DataFetching1 = () => {
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')
    const[post,setPost]=useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            setLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setPost({})
            setError('something went wrong')
        })
    },[])
    return (
        <div>
            {loading?'Loading':post.title}
            {error?error:null}
        </div>
    )
}
