"use client";

import Image from "next/image";
import H1 from "./Typo/H1";
import SubTitle from "./Typo/SubTitle";

export default function SecondaryHero({ title, image, subtitle }) {
  return (
    <section className="flex flex-col bg-white w-full pt-20">
      <div className="relative flex lg:flex-row flex-col lg:rounded-b-[90px] shadow-xl overflow-hidden">
        <div className="lg:block hidden relative lg:w-[calc(30%+10rem)] w-full bg-[--white] lg:h-[60vh] h-[40vh] z-10 lg:-ml-14">
          <Image
            src="/tree-shape-2.svg"
            fill
            alt="Kis fa nő az erdő mélyén"
            className="absolute w-full h-auto opacity-10"
            style={{
              objectFit: "cover",
              objectPosition: "left bottom",
            }}
          />
        </div>

        <div className="lg:hidden block absolute lg:w-[calc(30%+10rem)] w-full lg:h-[60vh] h-[40vh] z-10 lg:-ml-14">
          <Image
            src="/leaf4.svg"
            fill
            alt="Kis fa nő az erdő mélyén"
            className="absolute w-full h-auto opacity-10"
            style={{
              objectFit: "contain",
              objectPosition: "left bottom",
            }}
          />
        </div>

        <div className="relative lg:w-2/3 lg:rounded-br-[90px] overflow-hidden lg:h-[60vh] h-[40vh]">
          <Image
            src={image}
            fill
            alt="Kis fa nő az erdő mélyén"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
          <div className="absolute top-0 left-0 lg:w-1/2 w-full h-full bg-gradient-to-r lg:from-[--white] from-[#f5f5f7ce] lg:to-[#f5f5f700] to-[#f5f5f74b]"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center container w-full h-full z-20 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2 w-full">
            <H1 classname={'text-[--green]'}>{title}</H1>
          </div>
        </div>
      </div>
    </section>
  );
}
