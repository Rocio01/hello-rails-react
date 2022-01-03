import React from 'react'
import '../style.css'

export default function Home() {
  return (
    <div className='text-center'>
      <h2>HOME</h2>
      <ul>
        <li className='mt-5'> Open <a href='http://localhost:3000/greeting'>here</a> in your browser to see a random greeting.</li>
      </ul>
    </div>
  )
}
