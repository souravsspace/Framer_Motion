import { motion } from 'framer-motion'
import React from 'react'
import VariantsTwo from './VariantsTwo'

export default function MainVariant() {
  const MainVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.25,
      }
    },
    hidden: {
      y: '-100vw',
      opacity: 0,
    },
  }
  const boxVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
    hidden: {
      y: "15vh",
      opacity: 0,
    },
  };

  const chilldVariants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: "10px",
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={MainVariant}
      animate='visible'
      initial='hidden'
      className='grid' style={{padding: '4rem'}}>
              <motion.article
                variants={boxVariants}
                className="big-box"
              >
                {[1, 2, 3].map((box) => (
                  <motion.div
                    key={box}
                    variants={chilldVariants}
                    className="mini-box"
                  ></motion.div>
                ))}
              </motion.article>
              <motion.article
                variants={boxVariants}
                className="big-box"
              >
                {[1, 2, 3].map((box) => (
                  <motion.div
                    key={box}
                    variants={chilldVariants}
                    className="mini-box"
                  ></motion.div>
                ))}
              </motion.article>
              <motion.article
                variants={boxVariants}
                className="big-box"
              >
                {[1, 2, 3].map((box) => (
                  <motion.div
                    key={box}
                    variants={chilldVariants}
                    className="mini-box"
                  ></motion.div>
                ))}
              </motion.article>
              <motion.article
                variants={boxVariants}
                className="big-box"
              >
                {[1, 2, 3].map((box) => (
                  <motion.div
                    key={box}
                    variants={chilldVariants}
                    className="mini-box"
                  ></motion.div>
                ))}
              </motion.article>
    </motion.div>
  )
}
