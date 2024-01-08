import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs 14',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='nav-1'>
          <ul>
            <li><Link prefetch={false} href="/">Home</Link></li>
            <li><Link prefetch={false} href="/about">About</Link></li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  )
}