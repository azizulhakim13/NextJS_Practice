import React from 'react'
import Link from 'next/link'

export default function Blog() {
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
  return (
    <div className='container py-5'>
        <h1 className='mb-5'>Blogs</h1>
        <ul>
            {blogs.map((blog) => (
                <li className='pb-2' key={blog.id}><Link href={`/blog/${blog.id}`}>{blog.title}</Link></li>
            ))}
        </ul>
    </div>
  )
}
