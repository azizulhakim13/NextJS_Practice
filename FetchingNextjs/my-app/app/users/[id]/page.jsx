import getUser from "../../libs/getUser";

export default async function UserPage({params: {id}}) {
    const userData = await getUser(id)

  return (
    <div className="user-details py-5">
        <div className="container">
            <h1 className="fw-bold mb-5">User Details:</h1>
            <div className="d-inline-flex border rounded-3 shadow-lg">
                <div className="p-3">
                    <h3 className="fs-4 fw-semibold">{userData.name}</h3>
                    <p className="mb-2">{userData.email}</p>
                    <p>{userData.phone}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
