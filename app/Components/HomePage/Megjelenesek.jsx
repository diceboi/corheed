"use client";

import RegularContainer from "../UI/RegularContainer";
import H1 from "../UI/Typo/H1";
import Image from "next/image";
import SubTitle from "../UI/Typo/SubTitle";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SzolgaltatasokTile from "../UI/SzolgaltatasokTile";

import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import H2 from "../UI/Typo/H2";

export default function Megjelenesek() {
  // ✅ Create a Swiper reference
  const swiperRef = useRef(null);

  return (
    <RegularContainer classname={"relative bg-[--green] py-20"}>
      <div className="flex flex-col gap-8 w-full px-4">
        <SubTitle>Megjelenések</SubTitle>
        
        {/* Header with Navigation Buttons */}
        <div className="flex lg:flex-row flex-col justify-between gap-4 items-baseline">
          <H2 classname={"text-white"}>Itt találkozhattál velünk</H2>
          <div className="flex flex-nowrap gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-8 h-8 bg-[--yellow] rounded-full flex items-center justify-center"
            >
              <TbArrowLeft className="min-w-6 min-h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-8 h-8 bg-[--yellow] rounded-full flex items-center justify-center"
            >
              <TbArrowRight className="min-w-6 min-h-6" />
            </button>
          </div>
        </div>

        {/* Swiper Component */}
        <div className="flex lg:flex-row rounded-lg overflow-hidden">
          <Swiper
            ref={swiperRef} // ✅ Assign ref to Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={1.25}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
                640: {
                  slidesPerView: 1.25,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
          >
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/szolgaltatasok/generaciok.webp"}
                title={"Generációk együttműködése program"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/szolgaltatasok/fiatalbarat.webp"}
                title={"Fiatalbarát munkahely program"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/szolgaltatasok/utodlas.webp"}
                title={"Családi vállalkozások utódlása"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </RegularContainer>
  );
}
