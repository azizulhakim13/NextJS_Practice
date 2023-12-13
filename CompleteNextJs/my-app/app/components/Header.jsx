"use client"

import React from 'react'
import Link from 'next/link'


export default function Header() {
  return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white fs-3 fw-semibold pe-5 text-decoration-none">
          NextApp
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link href="/" className="nav-link px-2 text-white">Home</Link></li>
          <li><Link href="/fetchData" className="nav-link px-2 text-white">Fetch Data</Link></li>
          <li><Link href="/Photos" className="nav-link px-2 text-white">Photos</Link></li>
          <li><Link href="/form" className="nav-link px-2 text-white">Form</Link></li>
          <li><Link href="#" className="nav-link px-2 text-white">About</Link></li>
        </ul>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  )
}
