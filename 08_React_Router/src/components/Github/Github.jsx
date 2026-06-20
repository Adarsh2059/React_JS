import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])

    useEffect(() => {
    const fetchGithub = async () => {
        const response = await fetch('https://api.github.com/users/Adarsh2059')
        const data = await response.json()
        setData(data)
    }

    fetchGithub()
}, [])

  return (
    <div className='bg-gray-700 text-3xl text-white p-6'>Github Followers: {data.followers}
    {/* <img src="data.avatar_url" alt="Profile img" width={300} /> */}
    </div>
    
  )
}

export default Github