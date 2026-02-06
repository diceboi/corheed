"use client";

import Image from "next/image";
import H1 from "./Typo/H1";

export default function TrainingHero({title, image}) {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="relative flex flex-col rounded-[50px] lg:rounded-[50px] shadow-xl overflow-hidden h-[40vh] lg:h-[50vh]">
          {/* Background Image */}
          <Image
            src={image}
            fill
            alt={title}
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            className="z-0"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#f5f5f7ee] via-[#f5f5f7aa] to-transparent z-10"></div>
          
          {/* Title Content */}
          <div className="relative z-20 flex items-center h-full px-8 lg:px-16">
            <div className="flex flex-col gap-4 lg:w-2/3 w-full">
              <H1 classname={'text-[--green]'}>{title}</H1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
