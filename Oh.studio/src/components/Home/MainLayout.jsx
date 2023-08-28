import React from 'react'
import FloatingLogo from './FloatingLogo'
import BeforeFooter from '../BeforeFooter/BeforeFooter'

export default function MainLayout() {
  return (
    <main className='my-[12rem] max-md:my-[8rem] text-sm'>
      <header className='mx-[24rem] max-md:mx-[2rem] max-xl:mx-[5rem]'>
        <h1 className='text-7xl max-md:text-4xl max-lg:text-5xl text-center'>A brand and product designer working with clients globally</h1>
        <ul className='flex justify-center items-center gap-3 mt-[4rem] max-md:text-[10px]'>
          <li className='px-3 py-1'>Expertise</li>
          <li className='rounded-full bg-gray-light px-3 py-1'>Branding</li>
          <li className='rounded-full bg-gray-light px-3 py-1'>Product</li>
          <li className='rounded-full bg-gray-light px-3 py-1'>Design</li>
        </ul>
      </header>
      <BeforeFooter />
      <FloatingLogo />
    </main>
  )
}
