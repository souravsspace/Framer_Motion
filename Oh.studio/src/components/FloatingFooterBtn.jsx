import React from 'react'
import { HiEmojiHappy } from "react-icons/hi";
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function FloatingFooterBtn() {
  const { miniTransVari } = useContext(ThemeContext);
  return (
    // <motion.div variants={miniTransVari} className='flex justify-center sticky'>
    //   <div className='fixed flex gap-2 justify-center items-center bottom-[-8rem] max-md:bottom-5 cursor-pointer bg-black text-white rounded-full py-[10px] px-5'>
    //         <HiEmojiHappy />
    //         <span>Shop</span>
    //   </div>
    // </motion.div>
    <motion.main className='sticky flex justify-center mb-5 mt-32 max-md:my-3 z-[999]'>
      <div className='fixed flex gap-2 justify-center items-center cursor-pointer bg-black text-white rounded-full py-[10px] px-5'>
          <HiEmojiHappy />
          <span>Shop</span>
      </div>
    </motion.main>
  )
}
