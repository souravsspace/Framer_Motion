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
      <motion.div variants={transVari} className="grid grid-cols-00 place-items-center gap-y-10 max-md:gap-y-4 max-lg:gap-y-7">
        {imagesGallery.map((image, index) => {
          return (
            <section variant={miniTransVari} key={index}>
              <div className="rounded-2xl w-[45vw] aspect-[5/3] cursor-pointer relative group overflow-hidden:">
                <div>
                  {image.src && (
                    <img
                      src={image.src}
                      arl={image.alt}
                      className="rounded-2xl w-[45vw] aspect-[5/3] object-cover object-center"
                    />
                  )}
                  {image.hsrc && (
                    <video
                      src={image.hsrc}
                      alt={image.alt}
                      className="rounded-2xl w-[45vw] aspect-[5/3] object-cover object-center"
                      autoPlay
                      loop
                      muted
                    />
                  )}
                </div>
                <a
                  className="
                  absolute inset-0 text-xl opacity-0 rounded-2xl
                  hover:opacity-100 hover:backdrop-blur-lg hover:bg-black/25 
                  transition-all ease-linear duration-400"
                >
                  <div className="flex justify-between m-4">
                    <p className=" text-white">{image.alt}</p>
                    <p className="rounded-full m-3 group-hover:m-0 p-3 bg-white transition-all ease-out duration-[300] delay-100">
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
