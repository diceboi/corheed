"use client";

import Image from "next/image";
import H1 from "./Typo/H1";
import SubTitle from "./Typo/SubTitle";

export default function SecondaryHero({title, image, subtitle}) {
  return (
    <section className="flex flex-col bg-white w-full pt-20">
      <div className="flex lg:flex-row flex-col lg:rounded-b-[90px] rounded-b-[50px] shadow-xl overflow-hidden">
        <div className="relative flex flex-col lg:w-1/2 w-full bg-[--white] lg:pl-20 p-4 lg:h-[50vh] h-[25vh] z-20">
          <div className="flex flex-col justify-center lg:gap-8 gap-4 lg:w-full h-full z-10">
            <SubTitle>{subtitle}</SubTitle>
            <H1 classname={'text-[--green]'}>{title}</H1>
          </div>
          <Image
            src="/tree-shape-2.svg"
            fill
            alt="Kis fa nő az erdő mélyén"
            className=" absolute left-0 top-0 w-auto h-[40vh] -ml-1 opacity-10"
            style={{
              objectFit: "cover",
              objectPosition: "left top",
            }}
          />
        </div>
        <div className="relative lg:w-1/2 lg:rounded-br-[90px] overflow-hidden lg:h-[50vh] h-[30vh]">
          <Image
            src={image}
            fill
            alt="Kis fa nő az erdő mélyén"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
          <div className="absolute top-0 left-0 w-full h-full lg:bg-gradient-to-r bg-[#f5f5f765] from-[--white] to-[#f5f5f71c]">

          </div>
        </div>
      </div>
    </section>
  );
}
