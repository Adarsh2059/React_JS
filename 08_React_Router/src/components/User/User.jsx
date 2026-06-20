import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {user_id}=useParams();
  return (
    <div className='text-center bg-gray-700 text-3xl text-white p-4'>User: {user_id}</div>
  )
}

export default User