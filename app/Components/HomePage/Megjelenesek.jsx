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

import { TbArrowLeft, TbArrowRight, TbBrandYoutube } from "react-icons/tb";
import H2 from "../UI/Typo/H2";
import Link from "next/link";

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
                slidesPerView: 2.25,
              },
              768: {
                slidesPerView: 2.25,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/01_HiFest.webp"}
                title={"HiFest"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/02_Adom_a_ZET!_magazinmusor.webp"}
                title={"Adom a ZÉT! magazinműsor"}
                titlecolor={"text-white"}
                custombutton={
                  <Link href="https://www.youtube.com/playlist?list=PL9dPn8abKvYX18q0gTKsiWQDZIqmSJf6E" target="__blank">
                    <button className="absolute bottom-4 left-4 flex flex-nowrap text-white gap-2 items-center px-4 py-2 shadow-md transition-all rounded-full bg-red-600 hover:bg-red-800">
                      <TbBrandYoutube />
                      Megnézem
                    </button>
                  </Link>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/03_GenZ_Fest_Portfolio.webp"}
                title={"GenZ Fest Portfolio"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/04_Hello_Fonok_Deloitte_Konferencia.webp"}
                title={"Hello Főnök Deloitte Konferencia"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/05_HR_Power_interju.webp"}
                title={"HR Power interjú"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/06_HR_Brandem_Konferencia.webp"}
                title={"HR Brandem Konferencia"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/07_Cafe_Talks.webp"}
                title={"Café Talks"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/08_Business_Fest.webp"}
                title={"Business Fest"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/09_HVG_allasborze.webp"}
                title={"HVG állásbőrze"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/10_ICF_Coaching_Konferencia.webp"}
                title={"ICF Coaching Konferencia"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={
                  "/rendezvenyek/11_Korosi_Csoma_Sandor_Kulturalis_Kozpont.webp"
                }
                title={"Kőrösi Csoma Sándor Kultúrális Központ"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/12_Podcast.webp"}
                title={"Podcast"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/13_Portfolio_GenZ_Fest_speaker.webp"}
                title={"Portfolio GenZ Fest speaker"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SzolgaltatasokTile
                image={"/rendezvenyek/14_Publio_Konyvhet.webp"}
                title={"Publio Könyvhét"}
                titlecolor={"text-white"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </RegularContainer>
  );
}
