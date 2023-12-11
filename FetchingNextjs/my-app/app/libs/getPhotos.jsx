
export default async function getPhotos() {

    const response = await fetch('https://jsonplaceholder.typicode.com/photos')

    if(!response.ok){
        throw new Error('Failed to fetch Users')
    }

    return await response.json()
}
