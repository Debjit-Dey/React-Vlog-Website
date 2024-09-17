import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='text-5xl text-center my-20 text-red-700 ' >
      User : {userid}
    </div>
  )
}

export default User
