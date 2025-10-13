import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data =  useLoaderData()
  // const [data, setdata] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data)
  //     setdata(data)
  //   })
  // })

  return (
    <>
    <div className=' flex items-center m-4 bg-gray-600 text-white p-4 text-3xl gap-4'>
      <img src={data.avatar_url} alt="Git picture" width={300} className=' justify-center rounded-full' />
      <div className='flex flex-col justify-center gap-4 '>
      <div className=''>{data.bio}</div>
      <div className=''>Github followers: {data.followers}</div>
    </div>
    </div>
    
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}