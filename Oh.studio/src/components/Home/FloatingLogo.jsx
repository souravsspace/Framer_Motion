import React from 'react'
import { HiEmojiHappy } from "react-icons/hi";

export default function FloatingLogo() {
  return (
    <div className='flex justify-center'>
        <div className='fixed flex gap-2 justify-center items-center bottom-8 max-md:bottom-5 cursor-pointer bg-black text-white rounded-full py-[10px] px-5'>
              <HiEmojiHappy />
              <span>Shop</span>
        </div>
    </div>
  )
}
