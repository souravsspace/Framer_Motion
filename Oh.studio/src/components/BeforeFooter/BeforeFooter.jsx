import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

export default function BeforeFooter() {
  const { transVari, miniTransVari } = useContext(ThemeContext)
  return (
    <motion.footer variants={transVari} className='mt-[4rem] max-md:text-2xl text-4xl flex flex-col items-center'>
        <div>
          <h2>Let's work together.</h2>
        </div>
        <motion.div variants={miniTransVari} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
          <a className='text-gray hover:text-gray/60 cursor-pointer' href='mailto:isratjahan@support.com'>Get in touch.</a>
        </motion.div>
    </motion.footer>
  )
}
