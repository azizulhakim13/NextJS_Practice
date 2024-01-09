import getPosts from '@/lib/getPost'
import Link from 'next/link';
import React from 'react'

export default async function Posts() {
    const posts = await getPosts();
    console.log(posts);
  return (
    <div className='container py-5'>
        <h1>All Posts</h1>
        <ul className='mt-5 list-unstyled'>
            {posts.map(post => 
                <li className='p-4 border mb-3 shadow rounded-4' key={post.id}>
                    <Link className='fs-5 fw-medium' href={`posts/${post.id}`}>{post.title}</Link>
                    <p>{post.body}</p>
                </li>    
            )}
        </ul>
    </div>
  )
}
