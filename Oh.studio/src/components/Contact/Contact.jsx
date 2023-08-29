import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../App";

export default function Contact() {
  const { init, anim, trans } = useContext(ThemeContext);

  return (
    <motion.div
      className="my-[17rem] max-md:mb-[8rem] max-md:mt-[15rem] text-7xl max-md:text-4xl max-lg:text-5xl text-center flex flex-col items-center justify-center"
    >
      <motion.h2 animate={anim} initial={init} transition={trans}>
        Let's work together.
      </motion.h2>
      <motion.div
        animate={anim}
        initial={init}
        transition={trans}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          className="text-gray hover:text-gray/60 cursor-pointer"
          href="mailto:isratjahan@support.com"
        >
          Get in touch.
        </a>
      </motion.div>
    </motion.div>
  );
}
