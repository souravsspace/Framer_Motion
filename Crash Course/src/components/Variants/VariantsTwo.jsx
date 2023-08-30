import { motion } from "framer-motion";


export default function VariantsTwo() {
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
    <div>
      <motion.article
        variants={boxVariants}
        animate="visible"
        initial="hidden"
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
    </div>
  );
}
