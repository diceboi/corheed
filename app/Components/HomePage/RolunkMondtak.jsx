'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import H2 from '../UI/Typo/H2';
import { motion } from 'framer-motion';
import { TbArrowLeft, TbArrowRight } from 'react-icons/tb';
import Paragraph from '../UI/Typo/Paragraph';
import H3 from '../UI/Typo/H3';
import BtnText from '../UI/Typo/BtnText';
import Label from '../UI/Typo/Label';

const testimonials = [
  {
    id: 1,
    quote: "Vállalkozásunk számára nagyon fontos szempont, hogy jobban megértsük egymás működését, úgy gondoljuk, hogy ez az egyik alapfeltétele annak, hogy jól tudjunk együttműködni. Ennek függvényében már hagyománnyá vált nálunk, hogy minden évben szervezünk egy csapatépítő szakmai napot kollégáink részére. Ez 2024-ben sem volt másként, amikor felkértük a CoreHeed Consulting céget, hogy támogasson bennünket abban, hogy világosabb képet kapjunk magunkról és egymásról a generációs jellemzők megismerése által. Nagyon elégedettek vagyunk a kapott munka tartalmával és minőségével. Ez az egynapos szakmai program TÉNYLEG hozzásegített minket ahhoz, hogy jobban megértsük önmagunkat és a körülöttünk dolgozókat. Hálásan köszönjük a CoreHeed Consulting csapatának ezt a napot, egy tanulságos és felejthetetlen élmény volt! Csakis ajánlani tudjuk!",
    author: "Nyiri Emőke",
    title: "HR vezető",
    company: "Legal & Human Control Kft."
  },
  {
    id: 2,
    quote: "A vállalati tréning során nagyon pozitív élményt jelentett számunkra a tréner kedvessége és kisugárzása, amely hozzájárult a támogató légkör kialakításához. Munkavállalóink különösen értékelték, hogy a tréner rugalmasan és hatékonyan alkalmazkodott a különböző igényekhez. A feladatok érdekesek és kreatívak voltak, ami segített fenntartani az aktív részvételt és az érdeklődést az egész nap során. A tréning kiváló egyensúlyt adott az elméleti ismeretek és a gyakorlati alkalmazás között, így a tanultak azonnal használhatónak és relevánsnak bizonyultak. Mindvégig sikerült elkerülni a monotóniát, ezért a résztvevők aktívan be tudtak kapcsolódni a képzésbe.",
    author: "Pomázi Csenge",
    title: "HR vezető",
    company: "NHOOD Services Hungary Kft."
  },
  {
    id: 3,
    quote: "A CoreHeed rugalmassága sokat segített abban, hogy a csapatunkra igazítsuk a programot. Nagyra értékeltük, hogy a trénerek között is megtalálható volt minden generáció, így hitelesebben tudták megszólítani a célközönséget. Fergeteges, vidám pillanatokat éltünk át a kollégákkal, énekeltünk, előadtunk, fejlődtünk.",
    author: "Drucker Szilvia",
    title: "PR igazgató",
    company: "Human Telex Kft."
  },
  {
    id: 4,
    quote: "Bár a kapcsolatunk hivatalosan mentor-mentorált viszony volt, Dóri bőven merített a coachként használt eszköztárából, amit különösen nagyra értékeltem. Olyan kérdéseket tett fel, amelyek segítettek mélyebben megérteni önmagamat: az érzéseimet, megéléseimet és reakcióimat különböző helyzetekben. Hálás vagyok Dórinak, amiért segített új nézőpontokat felfedezni. Az együtt töltött időnek köszönhetően ma már sokkal bátrabban hallatom a hangomat, hatékonyabban húzok határokat, és tisztábban látom a saját hozzáadott értékemet egy-egy folyamatban. Öröm volt vele dolgozni, és szívből ajánlom őt – valamint a csapatát – mindenkinek, aki szeretne közelebb kerülni önmagához, és mélyebb megértést nyerni saját működéséről.",
    author: "Kolozsvári Emese",
    title: "Customer Service Team Lead",
    company: "BP Hungary"
  },
  {
    id: 5,
    quote: "Szeretném kifejezni elismerésemet és ajánlásomat a vezetői coaching folyamat kapcsán, melynek során lehetőségem volt több hónapon át együtt dolgozni egy átfogó, személyre szabott coaching folyamat keretében. A coach szakmai felkészültsége, rendszerszemléletű megközelítése és magas fokú empátiája egyaránt meghatározta a folyamatot. A közös munka során a coach támogatásával sikerült pontosan megfogalmaznom és priorizálnom a hosszú távú céljaimat, valamint hatékonnyá tenni az ezekhez vezető napi működésemet. Jelentősen fejlődött az önismeretem, a fókuszom, a döntéshozatali képességem és a kommunikációs tudatosságom. A coaching folyamat egyik legnagyobb értéke számomra az volt, hogy nem kész megoldásokat kínált, hanem olyan szemléletmódot és kérdésfeltevési technikát közvetített, amely hosszú távon is segíti az önreflexiómat és a problémamegoldó gondolkodásomat. Ennek eredményeként nemcsak a konkrét céljaimhoz jutottam közelebb, hanem összességében is tudatosabb, magabiztosabb, és kiegyensúlyozottabb működést értem el mind a munkában, mind a magánéletben.",
    author: "Dr. Domján Dorottya",
    title: "Income Tax Advisor",
    company: "KPMG"
  }
];

export default function RolunkMondtak() {
  const swiperRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="flex flex-col bg-white w-full py-20">
      <div className="flex flex-col container m-auto px-4">
        <div className='flex flex-col items-center gap-16'>
          <H2 classname={'text-center text-[--green]'}>Rólunk mondták</H2>
          
          <div className="w-full relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[--yellow] hover:bg-[--yellowhover] transition-all rounded-full flex items-center justify-center shadow-lg"
            >
              <TbArrowLeft className="min-w-6 min-h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[--yellow] hover:bg-[--yellowhover] transition-all rounded-full flex items-center justify-center shadow-lg"
            >
              <TbArrowRight className="min-w-6 min-h-6" />
            </button>

            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => {
                const isExpanded = expandedCards[testimonial.id];
                return (
                  <SwiperSlide key={testimonial.id}>
                    <motion.div 
                      className="flex flex-col gap-4 p-8 lg:p-12 bg-[--lightgreen] rounded-3xl min-h-[400px] lg:min-h-[450px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex-1">
                        <div className="relative">
                          <Paragraph classname={`italic transition-all duration-300 ${!isExpanded ? 'line-clamp-6' : ''}`}>
                            "{testimonial.quote}"
                          </Paragraph>
                          {!isExpanded && (
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[--lightgreen] to-transparent pointer-events-none"></div>
                          )}
                        </div>
                        <button
                          onClick={() => toggleExpand(testimonial.id)}
                          className="text-[--green] hover:text-[--yellow] font-bold italic underline text-base mt-2 transition-colors"
                        >
                          {isExpanded ? 'Kevesebb' : 'Bővebben'}
                        </button>
                      </div>
                      <div className="flex flex-col gap-1 border-t-[1px] border-gray-300 pt-4">
                        <H3 classname={"text-[--yellow] font-bold text-xl lg:text-2xl"}>
                          {testimonial.author}
                        </H3>
                        <BtnText classname={"text-[--green] font-semibold text-base lg:text-lg"}>
                          {testimonial.title}
                        </BtnText>
                        <Label classname={"text-[--green] text-sm lg:text-base opacity-80"}>
                          {testimonial.company}
                        </Label>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
