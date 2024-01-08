import Link from 'next/link'
import getUsers from '../libs/getUsers'

export default async function UsersPage() {
    const users = await getUsers()
  return (
    <div className='container mt-4'>
        <h1 className='fw-bold mb-4'>Users:</h1>
        <ul>
        {users.map(user => {
            return (
                <li className='pb-2' key={user.id}>
                    <>
                        <div className="d-inline-flex p-3 border shadow ms-2 mb-3 rounded-3">
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </div>
                    </>
                </li>
            )
        })}
        </ul>
    </div>
  )
}
