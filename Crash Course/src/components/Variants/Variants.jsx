import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Variants() {
  const [miniBox, setMiniBox] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const boxVariants = {
    hidden: {
      y: "15vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
          when: "beforeChildren",
      }
    },
    trans: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  };

  const miniBoxVariants = {
    hidden: {
      y: "5vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      staggerChildren: 100,
    },
  };

  return (
    <main>
      <div>
        <motion.article
          variants={boxVariants} // Pass the variant object into Framer Motion
          animate="visible" // this is the default state
          initial="hidden" // this is the initial state
          className="big-box" // this is the element we want to animate
          transition="trans" // the transition we want to use, defined below
        >
          {miniBox.map((box) => (
            <motion.div
              variants={miniBoxVariants}
              className="mini-box"
            ></motion.div>
          ))}
        </motion.article>
      </div>
    </main>
  );
}
