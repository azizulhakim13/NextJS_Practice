import getComments from '@/lib/getComments';
import getPostDetails from '@/lib/getPostDetails';
import React from 'react'

export async function generateMetadata({params}){
    const {id} = params;
    const post = await getPostDetails(id); 

    return {
        title: post.title,
        description: post.body,
    };
}

export default async function PostDetails({params}) {
    const {id} = params;
    const postPromise = getPostDetails(id); 
    const commentsPromise = getComments(id); 

    const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div className='container py-5'>
        <h2 className='text-success fw-medium'>{post.title}</h2>
        <p>{post.body}</p>

        <div>
            <h2 className='mt-5'>Comments</h2>
            <ul>
                 {comments.map(comment => 
                    <li key={comment.id}>{comment.body}</li>    
                )}
            </ul>
        </div>
    </div>
  )
}
