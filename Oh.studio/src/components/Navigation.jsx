import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <main className='flex items-center justify-center my-5 max-md:my-3 z-[999]'>
          <ul className='
            flex rounded-full fixed top-8 max-md:top-5 py-[2px] backdrop-blur-[10px] text-sm bg-gray-light'>
            <li className='py-3 ps-1 rounded-full'><Link to='/' className='py-3 px-6 rounded-full bg-white'>Home</Link></li>
            <li className='py-3 px-[0.15rem] rounded-full'><Link to='/Profile' className='py-3 px-6 rounded-full'>Profile</Link></li>
            <li className='py-3 pr-1 rounded-full'><Link to='/Contact' className='py-3 px-6 rounded-full'>Contact</Link></li>
          </ul>
    </main>
  )
}
