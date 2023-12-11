import Link from "next/link"
import getUsers from "../libs/getUsers"

export default async function UsersPage() {
    const users = await getUsers()

  return (
    <div className="container mt-4">
        <h1>Users</h1>
        {users.map(user => {
            return (
                <>
                    <div>
                        <div className="user p-3 border shadow m-3 rounded-3">
                            <Link href={`/users/${user.id}`} key={user.id}>{user.name}</Link>
                        </div>
                    </div>
                    
                </>
            )
        })}
    </div>
  )
}
