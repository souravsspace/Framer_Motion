import React, { useContext } from "react";
import BeforeFooter from "../BeforeFooter/BeforeFooter";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";

export default function Profile() {
  const { transVari, miniTransVari } = useContext(ThemeContext);

  const experience = [
    {
      title: "2017 — Present (main)",
      name: "OH.STUDIO",
      subtitle: "Freelance Designer",
      department: "Director",
    },
    {
      title: "2021 — Present",
      name: "Friendly Studio",
      subtitle: "Lead Product Designer",
      department: "Freelance",
    },
    {
      title: "2022",
      name: "R/GA",
      subtitle: "Senior Visual Designer",
      department: "Freelance",
    },
    {
      title: "2021",
      name: "R/GA",
      subtitle: "Senior Visual Designer",
      department: "Freelance",
    },
    {
      title: "2021",
      name: "AKQA",
      subtitle: "Senior Designer",
      department: "Freelance",
    },
    {
      title: "2020",
      name: "AKQA",
      subtitle: "Senior Designer",
      department: "Freelance",
    },
    {
      title: "2019",
      name: "UI Centric",
      subtitle: "Senior Product Designer",
      department: "Freelance",
    },
    {
      title: "2017",
      name: "Agency TK",
      subtitle: "Senior Digital Designer",
      department: "Permanent",
    },
    {
      title: "2012",
      name: "Agency TK",
      subtitle: "Digital Designer",
      department: "Permanent",
    },
    {
      title: "2009",
      name: "Next Level",
      subtitle: "Digital Designer",
      department: "Permanent",
    },
    {
      title: "2008",
      name: "Next Level",
      subtitle: "Junior Digital Designer",
      department: "Permanent",
    },
  ];
  return (
    <main className="px-14 max-md:px-3 max-lg:px-8">
      <motion.div
        variants={transVari}
        animate="visible"
        initial="hidden"
        className="container space-y-[13rem] mx-auto"
      >
        <motion.div 
          variants={miniTransVari}
          className="mt-64">
          <h1 className="text-center text-7xl max-md:text-4xl max-lg:text-5xl font-semibold">
            Hey 👋🏼 I'm Riya{" "}
          </h1>
        </motion.div>
        <motion.div 
          variants={miniTransVari}
          className="flex justify-between gap-10 max-md:gap-4 max-md:flex-row max-md:items-center">
          <img
            className="w-[100%] max-w:[500px] rounded-lg object-cover"
            src="https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg"
          />
          <img
            className="w-[100%] max-w:[500px] rounded-lg object-cover"
            src="https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg"
          />
        </motion.div>
        <motion.div 
          variants={miniTransVari}
          className="text-center">
          <ul className="space-y-6 my-[12rem] max-md:my-[8rem]">
            <motion.li 
                variants={miniTransVari}
                className="bg-gray-light text-black inline-block px-3 py-px rounded-full">
              About
            </motion.li>
            <motion.li 
                variants={miniTransVari}
                className="text-4xl max-md:text-2xl mx-[20rem] max-md:mx-[1rem] max-lg:mx-[5rem] max-xl:mx-[10rem] font-semibold">
              A freelance designer based in the UK. I combine my experience in
              product and brand to solve problems, tell stories, and create
              compelling experiences.
            </motion.li>
          </ul>
        </motion.div>
        <motion.div 
          variants={miniTransVari}
          className="text-center">
          <ul className="space-y-6 my-[12rem] max-md:my-[8rem]">
            <motion.li 
                variants={miniTransVari}
                className="bg-gray-light text-black inline-block px-3 py-px rounded-full">
              Experience
            </motion.li>
            <motion.li 
                variants={miniTransVari}
                className="text-4xl max-md:text-2xl font-semibold">
              Where I've worked
            </motion.li>
          </ul>
        </motion.div>
        <motion.div
          variants={miniTransVari}
          >
          <ul className="md:gap-y-9 gap-y-10 md:my-[12rem] my-[8rem] gap-x-2 grid grid-cols-2 md:grid-cols-3">
            {experience.map((item, index) => (
              <motion.li variants={miniTransVari} key={index} className="text-center">
                <div className="gap-y-2 max-md:text-xs space-y-2">
                    <div className="text-gray">{item.title}</div>
                    <div className="text-xl font-semibold">{item.name}</div>
                    <div className="text-gray">{item.subtitle}</div>
                    <div className="bg-gray-light text-black inline-block px-3 py-px rounded-full">
                      {item.department}
                    </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <div>
          <BeforeFooter />
        </div>{" "}
        <div>{/* for spacing */}</div>
      </motion.div>
    </main>
  );
}
