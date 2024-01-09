'use client';
import React from 'react'

export default function Button() {
  return (
    <div>
        <button className='btn btn-outline-dark' onClick={() => console.log("You have clicked here!")}>Click here</button>
    </div>
  )
}
