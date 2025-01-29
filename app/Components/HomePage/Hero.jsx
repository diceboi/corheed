"use client";

import Image from "next/image";
import SubTitle from "../UI/Typo/SubTitle";
import H1 from "../UI/Typo/H1";
import MainNavButton from "../UI/Buttons/MainNavButton";

export default function Hero() {
  return (
    <section className="flex flex-col bg-[--green] w-full pt-20">
      <div className="flex lg:flex-row flex-col lg:rounded-b-[90px] rounded-b-[50px] shadow-xl overflow-hidden">
        <div className="relative flex flex-col lg:items-end lg:w-1/2 w-full bg-[--white] p-4 lg:h-[80vh] h-[50vh] z-20">
          <div className="flex flex-col justify-center gap-8 lg:w-8/12 h-full z-10">
            <SubTitle>Coreheed Consulting Kft.</SubTitle>
            <H1 classname={'text-[--green]'}>A többgenerációs csapatok szakmai támogatója</H1>
            <MainNavButton link={'/kapcsolat'} text={'Ajánlatkérés'}/>
          </div>
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
        </div>
        <div className="hidden lg:block relative lg:w-1/2 rounded-br-[90px] overflow-hidden lg:h-[80vh] h-[40vh]">
          <Image
            src="/forest-bg.webp"
            fill
            alt="Kis fa nő az erdő mélyén"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
          <Image
            src="/tree-shape.svg"
            fill
            alt="Kis fa nő az erdő mélyén"
            className="absolute z-20 left-0 top-0 w-auto h-full -ml-1"
            style={{
              objectFit: "cover",
              objectPosition: "left top",
            }}
          />
        </div>
      </div>
    </section>
  );
}
