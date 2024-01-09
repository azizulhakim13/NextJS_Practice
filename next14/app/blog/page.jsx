import React from 'react'
import Link from 'next/link'

const blogs = [{
  id: 1,
  title: "Blog 1",
  description: "Blog 1 Description"
},
{
  id: 2,
  title: "Blog 2",
  description: "Blog 2 Description"
}]

export default function Blog() {
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map(blog => 
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>{blog.title}</Link>
          </li>  
        )}
      </ul>
    </div>

  )
}
