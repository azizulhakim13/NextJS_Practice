import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className="container py-5">
        <Link href="/users" className="btn btn-outline-dark">Go to Users</Link>
      </div>
    </div>
  )
}
