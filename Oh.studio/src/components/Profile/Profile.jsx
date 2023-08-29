import React from "react";
import BeforeFooter from "../BeforeFooter/BeforeFooter";

export default function Profile() {
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
      <div className="container space-y-[13rem] mx-auto">
        <div className="mt-64">
          <h1 className="text-center text-7xl max-md:text-4xl max-lg:text-5xl font-semibold">
            Hey 👋🏼 I'm Riya{" "}
          </h1>
        </div>
        <div className="flex justify-between gap-4 max-md:flex-col max-md:items-center">
          <img
            className="w-[100%] aspect-[5/4] rounded-lg object-cover"
            src="https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg"
          />
          <img
            className="w-[100%] aspect-[5/4] rounded-lg object-cover"
            src="https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg"
          />
        </div>
        <div className="text-center">
          <ul className="space-y-6 my-[12rem] max-md:my-[8rem]">
            <li className="bg-gray-light text-black inline-block px-3 py-px rounded-full">
              About
            </li>
            <li className="text-4xl max-md:text-2xl mx-[20rem] max-md:mx-[1rem] max-lg:mx-[5rem] max-xl:mx-[10rem] font-semibold">
              A freelance designer based in the UK. I combine my experience in
              product and brand to solve problems, tell stories, and create
              compelling experiences.
            </li>
          </ul>
        </div>
        <div className="text-center">
          <ul className="space-y-6 my-[12rem] max-md:my-[8rem]">
            <li className="bg-gray-light text-black inline-block px-3 py-px rounded-full">
              Experience
            </li>
            <li className="text-4xl max-md:text-2xl font-semibold">
              Where I've worked
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-6 my-[12rem] max-md:my-[8rem] grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-2">
            {experience.map((item, index) => (
              <li key={index} className="text-center">
                <div className="space-y-2 max-md:text-xs">
                  <div className="text-gray">{item.title}</div>
                  <div className="text-xl font-semibold">{item.name}</div>
                  <div className="text-gray">{item.subtitle}</div>
                  <div className="bg-gray-light text-black inline-block px-3 py-px rounded-full">{item.department}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <BeforeFooter />
        </div>  <div>{/* for spacing */}</div>
      </div>
    </main>
  );
}
