import React from 'react'
import imgs from '../components/images'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Slider() {
  const [width, setwidth] = useState(0)
  const sliderContainer = useRef()

  useEffect(()=>{
    // console.log(sliderContainer.current.scrollWidth, sliderContainer.current.offsetWidth)
    // console.log(sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth)
    setwidth(sliderContainer.current.scrollWidth - sliderContainer.current.offsetWidth)
  }, [])

  return (
    <div className='main'>
      <motion.div ref={sliderContainer} className='slider-container' whileTap={{cursor: 'grabbing'}}>
        <motion.div 
          drag='x' 
          dragConstraints={{right: 0, left: -width}}
          className='slider--inner'>
          {imgs.map((img)=> {
            return( 
              <motion.div className='img--item' key={img}>
                <img src={img} />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
