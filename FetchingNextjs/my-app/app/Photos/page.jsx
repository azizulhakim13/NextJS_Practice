import Image from "next/image"
import getPhotos from "../libs/getPhotos"

export default async function UsersPage() {
    const users = await getPhotos()

  return (
    <div className="container mt-4">
        <h1>Users</h1>
        <div className="row">
            {users.map(user => {
                return (
                    <>
                        <div className="col-lg-2">
                            <div className="user p-3 border shadow m-3 rounded-3">
                                <Image src={user.url} width={100} height={100} alt='dosg' priority />
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </div>
  )
}
