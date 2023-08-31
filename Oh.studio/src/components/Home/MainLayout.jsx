import React from 'react'
import BeforeFooter from '../BeforeFooter/BeforeFooter'
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import Gallery from './Gallery';

export default function MainLayout() {
  const { transVari, miniTransVari } = useContext(ThemeContext);
  return (
    <motion.div 
        variants={transVari} 
        animate='visible'
        initial='hidden'
        className='my-[12rem] max-md:my-[8rem] text-sm relative'>
      <header className='mx-[24rem] max-md:mx-[2rem] max-xl:mx-[5rem]'>
        <motion.h1 variants={miniTransVari} className='text-7xl leading-tight font-semibold max-md:text-4xl max-lg:text-5xl text-center'>A brand and product designer working with clients globally</motion.h1>
        <motion.ul variants={miniTransVari} className='flex justify-center items-center gap-3 mt-[4rem] max-md:text-[10px]'>
          <li className='px-3 py-1'>Expertise</li>
          <li className='rounded-full bg-gray-light px-3 py-1'>Branding</li>
          <li className='rounded-full bg-gray-light px-3 py-1'>Product</li>
          <li className='rounded-full bg-gray-light px-3 py-1'>Design</li>
        </motion.ul>
      </header>
        <motion.div variants={transVari}>
          <Gallery />
          <BeforeFooter />
        </motion.div>
    </motion.div>
  )
}
