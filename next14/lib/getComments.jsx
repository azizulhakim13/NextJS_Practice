import React from 'react'

export default async function getComments(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    return result.json();
}
