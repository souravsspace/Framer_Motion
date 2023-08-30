import { motion, useCycle } from "framer-motion";
import React from "react";

export default function AnimateIniialTrans() {
  const [isToggled, toggle] = useCycle(false, true);

  return (
    <main className="container">
      <div className="conatiner" style={{ cursor: "pointer" }}>
        <motion.article
          animate={{
            x: isToggled ? "55vw" : 0,
            opacity: isToggled ? 0.5 : 1,
            rotate: isToggled ? 180 : 0,
            scale: isToggled ? 0.5 : 1,
            boxShadow: isToggled ? "0 0 1rem rgb(0, 0, 0)" : "0 0 0 rgb(0, 0, 0)",
          }}
          initial={{ opacity: 0.5, x: 0, rotate: 0, boxShadow: "0 0 0 rgb(0, 0, 0)" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12.5,
          }}
          // variants={{
          //   open: { opacity: 1, x: '55vw', rotate: 180 },
          //   closed: { opacity: 1, x: '0', rotate: 0 },
          // }}
          // animate={isToggled ? 'open' : 'closed'}
          // initial={'closed'}
          // exit={'closed'}
          // transition={{
          //   type: 'spring',
          //   stiffness: 100,
          //   damping: 12.5,
          //   // type: 'tween',
          //   // duration: 0.2,
          //   // delay: 0.5,
          // }}
          onClick={() => toggle(!isToggled)}
          style={{ display: "block", width: "10rem", height: "10rem" }}
        ></motion.article>
      </div>
    </main>
  );
}
