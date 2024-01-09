export default async function getPosts() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            next: {
                revalidate: 10,
            }
        }
    );

    return result.json();
}