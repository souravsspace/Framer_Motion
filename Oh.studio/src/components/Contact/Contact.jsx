import React from 'react'
import { motion } from "framer-motion"


export default function Contact() {
  return (
    <div className='my-[17rem] text-7xl max-md:text-4xl max-lg:text-5xl text-center flex flex-col items-center justify-center'>
        <h2>Let's work together.</h2>
        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <a className='text-gray hover:text-gray/60 cursor-pointer' href='mailto:isratjahan@support.com'>Get in touch.</a>
        </motion.div>
    </div>
  )
}
