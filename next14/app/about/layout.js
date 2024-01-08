import React from 'react'
import Link from 'next/link'

export default function AboutLayout({children}) {
  return (
    <div>
        <nav className='nav-1'>
          <ul>
            <li><Link href="/about/nested">Nested 1</Link></li>
            <li><Link href="/about">Nested 2</Link></li>
          </ul>
        </nav>
        <hr />
        {children}
    </div>
  )
}
