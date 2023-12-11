import React from 'react'
import Image from 'next/image'

async function getDogs() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random', {
      cache: 'no-cache',
    })
    const data = await response.json()
    return data
  }
  
  export default async function Home() {
  
    const dogs = await getDogs()
    console.log(dogs)
  
    return (
      <div> 
        <h1>Homepage</h1>
        <Image className='p-5' src={dogs.message} width={200}
        height={200}
         alt='dosg' priority />
        <img src="/vercel" alt="" />
      </div>
    )
  }