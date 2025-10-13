import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-orange-500 text-white'>User: {userid}</div>
  )
}

export default User