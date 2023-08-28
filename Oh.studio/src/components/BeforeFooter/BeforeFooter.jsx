import { motion } from 'framer-motion'
import React from 'react'

export default function BeforeFooter() {
  return (
    <footer className='mt-[4rem] max-md:text-2xl text-4xl flex flex-col items-center'>
        <h2>Let's work together.</h2>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
          <a className='text-gray hover:text-gray/60 cursor-pointer' href='mailto:isratjahan@support.com'>Get in touch.</a>
        </motion.div>
    </footer>
  )
}
