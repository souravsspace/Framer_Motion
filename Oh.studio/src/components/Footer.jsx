import React from 'react'
import { HiCode } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className='m-[32px] max-md:m-[20px] max-md:mb-[5rem] text-sm'>
      <div className='flex justify-between items-center max-md:flex-col gap-5'>
          <div className='flex justify-between items-center gap-3 max-md:flex-col'>
            <HiCode className='text-[2rem]' />
            <p> © Israt Jahan 2023 </p>
          </div>
          <ul className='flex justify-between items-center gap-3'>
            <li><a className='hover:text-gray' href="/">Instagram</a></li>
            <li><a className='hover:text-gray' href="/">Twitter</a></li>
            <li><a className='hover:text-gray' href="/">Facebook</a></li>
          </ul>
      </div>
    </footer>
  )
}
