import React from 'react'

export default function BlogPage({params}) {
    const {id} = params;
  return (
    <div className="container py-5">
        <h1>The blog id is: {id}</h1>
    </div>
  )
}
