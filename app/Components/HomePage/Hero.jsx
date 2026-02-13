"use client";

import Image from "next/image";
import SubTitle from "../UI/Typo/SubTitle";
import H1 from "../UI/Typo/H1";
import MainNavButton from "../UI/Buttons/MainNavButton";
import { useState, useEffect } from "react";
import ToggleSwitch from "../UI/ToggleSwitch";
import { motion } from "framer-motion"

export default function Hero() {

  const [slider, setSlider] = useState("forest");

  const handleToggle = () => {
    setSlider((prev) => (prev === "forest" ? "bridge" : "forest"));
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSlider((prev) => (prev === "forest" ? "bridge" : "forest"));
  //   }, 8000); // 5000ms = 5 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  return (
    <section className="flex flex-col bg-[--green] w-full pt-20">
      <div className="relative flex lg:flex-row flex-col lg:rounded-b-[90px] rounded-b-[50px] overflow-hidden">

        <div className="relative flex flex-col lg:items-end lg:w-1/3 w-full bg-[--white] p-4 lg:h-[50vh] h-[40vh] z-20">
          {slider === "forest" && (
            <Image
              src="/tree-shape-2.svg"
              fill
              alt="Kis fa nő az erdő mélyén"
              className="block lg:hidden absolute left-0 top-0 w-auto h-full -ml-1 opacity-10"
              style={{
                objectFit: "cover",
                objectPosition: "left top",
              }}
            />
          )}
          {slider === "bridge" && (
            <Image
              src="/bridge-shape-2.svg"
              fill
              alt="Kis fa nő az erdő mélyén"
              className="block lg:hidden absolute left-0 top-0 w-auto h-full -ml-1 opacity-10"
              style={{
                objectFit: "cover",
                objectPosition: "left top",
              }}
            />
          )}
        </div>
        <div className="hidden lg:block relative lg:w-2/3 rounded-br-[90px] overflow-hidden lg:h-[50vh] h-[70vh]">
          {slider === "forest" && (
            <>
              <motion.img
                initial={{ opacity: 0, translateX: -40 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: 40 }}
                transition={{ duration: 1.2, ease: 'easeOut', type: 'spring', bounce: 0.4 }}
                src="/forest-bg.webp"
                alt="Kis fa nő az erdő mélyén"
                style={{ objectFit: "cover", objectPosition: "50% 50%", width: "100%", height: "100%" }}
                className="absolute top-0 left-0"
              />
              <Image
                src="/tree-shape.svg"
                fill
                alt="Kis fa nő az erdő mélyén"
                className="absolute z-20 left-0 top-0 w-full h-auto -ml-1 transition-all duration-500"
                style={{
                  objectFit: "contain",
                  objectPosition: "left top",
                }}
              />
            </>
          )}
          {slider === "bridge" && (
            <>
              <motion.img
                initial={{ opacity: 0, translateX: -40 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: 40 }}
                transition={{ duration: 1.2, ease: 'easeOut', type: 'spring', bounce: 0.4 }}
                src="/bridge-bg.webp"
                alt="Híd a fák között"
                style={{ objectFit: "cover", objectPosition: "50% 50%", width: "100%", height: "100%" }}
                className="absolute top-0 left-0"
              />
              <Image
                src="/bridge-shape.svg"
                fill
                alt="Híd a kroosztályok között"
                className="absolute z-20 left-0 top-0 w-full h-auto "
                style={{
                  objectFit: "cover",
                  objectPosition: "left top",
                }}
              />
            </>
          )}

          <div className="absolute z-10 left-0 top-0 w-1/2 h-full -ml-1 bg-gradient-to-r from-[--white] to-[#f5f5f700]"></div>

        </div>
        <div className="absolute top-1/2 left-1/4 -translate-x-1/4 -translate-y-1/2 flex flex-col justify-center container w-full h-full z-20 px-4">
          <div className="flex lg:flex-row flex-col gap-8 lg:w-1/2 w-full items-start">

            <Image src={'/logos/coreheed-square-logo-green.svg'} alt={'Logo'} width={300} height={300} className={'lg:w-20 w-14 h-auto'} />
            <div className="flex flex-col items-start gap-4">
              {slider === "forest" && (
                <H1 classname={'text-[--green]'}>A többgenerációs csapatok szakmai támogatója</H1>
              )}
              {slider === "bridge" && (
                <H1 classname={'text-[--green]'}>Híd a generációk között </H1>
              )}


              <MainNavButton link={'/kapcsolat'} text={'Lépj kapcsolatba velünk!'} classname={'my-2'} />
            </div>
          </div>
        </div>

        {/* <div className="absolute lg:bottom-8 bottom-4 left-1/2 -translate-x-1/2 z-20">
          <ToggleSwitch isActive={slider === "bridge"} onToggle={handleToggle} />
        </div> */}
      </div>
    </section>
  );
}
