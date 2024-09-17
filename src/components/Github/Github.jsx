import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])
    const data = useLoaderData();
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Debjit-Dey')
    //     .then(res => res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='dark:bg-gray-600 h-screen'>
    <div className='text-center text-4xl  text-orange-600 py-5'>
      GitHub Followers : {data.followers}
    </div>
    <img src= {data.avatar_url} alt="git photo"  className='mx-4 rounded-lg w-80 my-4 ' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Debjit-Dey')
    return response.json();
}
