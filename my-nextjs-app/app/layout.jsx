import './style.scss'
import './globals.css'

import { Rubik } from 'next/font/google'

// Components
import Navbar from './components/Navbar'
import BootstrapClient from './components/BootstrapClient'
import Script from 'next/script'
import ManiJs from './components/main'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <BootstrapClient />
        <ManiJs />
        {/* <Script src="../scripts/main.js"></Script> */}
      </body>
    </html>
  )
}
