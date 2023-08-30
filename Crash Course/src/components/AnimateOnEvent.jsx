import { motion } from 'framer-motion'
import React from 'react'

export default function AnimateOnEvent() {
  return (
    <main className="container">
      <div className="conatiner" style={{ cursor: "pointer" }}>
          <motion.article 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.85}}
            drag
            dragConstraints={{left: 50, right: 50, top: 50, bottom: 50}}
            style={{ display: "block", width: "10rem", height: "10rem" }}
          >

          </motion.article>
      </div>
    </main>
  )
}
