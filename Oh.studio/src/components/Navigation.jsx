import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [active, setActive] = useState(0)
  const navItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Profile',
      path: '/Profile'
    },
    {
      name: 'Contact',
      path: '/Contact'
    }
  ]
  return (
    <main className='flex items-center justify-center my-5 max-md:my-3 z-[999]'>
          <ul className='
            flex rounded-full fixed top-8 max-md:top-5 py-[2px] backdrop-blur-[10px] text-sm bg-gray-light'
            >
              {navItems.map((item, index) => {
                return (
                  <li key={index} className=
                  {`py-3 mx-px rounded-full ${active === index ? 'bg-white text-black' : ''}`}>
                    <Link 
                      onClick={() => setActive(index)}
                      className='py-3 px-6 rounded-full'
                      to={item.path}>{item.name}
                    </Link>
                  </li>
                )
              })}
          </ul>
    </main>
  )
}
