import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

export default function Gallery() {
  const { transVari, miniTransVari } = useContext(ThemeContext);
  const imagesGallery = [
    {
      src: "https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg",
      alt: "Aire",
    },
    {
      src: "https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=2048",
      alt: "Correlated",
    },
    {
      src: "https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg",
      alt: "Channel 5",
    },
    {
      src: "https://framerusercontent.com/images/PsFtrMsfil25WM1W3mnUe2okoI.jpg",
      alt: "Ronald Abram",
    },
    {
      alt: "Propeller",
      hsrc: "https://framerusercontent.com/modules/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M~Jq48dGctHPeHtnn90xE_Aem-3HQJB_aNVwfu2fao5Ok.mp4",
    },
    {
      src: 'https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg',
      alt: 'Schuh',
    },
    {
      src: 'https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg?scale-down-to=2048',
      alt: 'Paperstreet',
    },
    {
      alt: 'OH.SUPPLY',
      hsrc: 'https://framerusercontent.com/modules/assets/SGjFvgcbK7s4yKh0xwuNjriMNII~5SCIlrVv6SNR5PFMjsMv3qAIi3sYsG2gjdlB0qM-tng.mp4',
    },
    {
      src: 'https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=2048',
      alt: 'Monokel Eyewear',
    },
    {
      src: 'https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024',
      alt: 'Lawtrades',
    },
    {
      src: 'https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024',
      alt: 'Baselworld',
    },
    {
      hsrc: 'https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4',
      alt: 'NYCB',
    },
  ];
  return (
    <main className="my-32 max-md:my-20 mx-8 max-md:mx-1 max-lg:mx-3">
      <motion.div variants={transVari} className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-10 max-md:gap-y-4 max-lg:gap-y-7">
        {imagesGallery.map((image, index) => {
          return (
            <section variant={miniTransVari} key={index}>
              <div className="rounded-2xl mx-2 aspect-[5/3] cursor-pointer md:relative md:group md:overflow-hidden:">
                <div className="aspect-[5/3]">
                  {image.src && (
                    <img
                      src={image.src}
                      arl={image.alt}
                      className="rounded-2xl aspect-[5/3] object-cover object-center"
                    />
                  )}
                  {image.hsrc && (
                    <video
                      src={image.hsrc}
                      alt={image.alt}
                      className="rounded-2xl aspect-[5/3] object-cover object-center"
                      autoPlay
                      loop
                      playsInline
                    />
                  )}
                </div>
                <a
                  className="
                  md:absolute md:inset-0 md:text-xl md:opacity-0 rounded-2xl
                  md:hover:opacity-100 md:hover:backdrop-blur-lg md:hover:bg-black/25 
                  md:transition-all md:ease-linear md:duration-400"
                >
                  <div className="flex justify-between md:m-4 my-1">
                    <p className=" text-black md:text-white">{image.alt}</p>
                    <p className="hidden md:block rounded-full m-3 md:group-hover:m-0 p-3 bg-white transition-all ease-out duration-[300] delay-100">
                      <GoArrowUpRight className="text-black" />
                    </p>
                  </div>
                </a>
              </div>
            </section>
          );
        })}
      </motion.div>
    </main>
  );
}
