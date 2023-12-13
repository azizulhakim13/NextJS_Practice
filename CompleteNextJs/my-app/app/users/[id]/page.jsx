import getUser from "../../libs/getUser";

export default async function UserPage({params: {id}}) {
    const userData = await getUser(id)

  return (
    <div className="container">
        <h1 className="fw-bold pt-5 mb-4">User Details:</h1>
        <div className="d-inline-flex flex-column border py-4 px-5 shadow-lg">
            <h3>{userData.name}</h3>
            <p>{userData.email}</p>
            <p>{userData.phone}</p>
        </div>
    </div>
  )
}
