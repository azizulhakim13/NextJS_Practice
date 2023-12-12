import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div className="px-3">
        <Image className="img-fluid" src="/vercel.svg" alt="image" width={200} height={100} />
      </div>
    </div>
  )
}
