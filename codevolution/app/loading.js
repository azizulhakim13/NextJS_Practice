import React from 'react'

export default function Loading() {
  return (
    <div className='d-flex justify-content-center align-items-center py-5'>
        <div className="spinner-border text-primary m-5" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}