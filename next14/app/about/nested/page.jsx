
import Button from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import next from '@/public/images/next.svg'

export default function About() {
  return (
    <div className='container py-5'>
      <h2>Nested page</h2>
      <Image className='my-5' placeholder="blur" blurDataURL="data:..." src={next} alt='logo' />
      <Button />
    </div>
  )
}
