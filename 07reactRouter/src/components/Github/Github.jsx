import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Atishay94')
    //   .then((res) => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, []);
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-2xl'>
        Github Followers: {data.followers}
        <img className='' src={data.avatar_url} alt="Git picture" title='Github Profile picture' width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Atishay94')
    return response.json()
}