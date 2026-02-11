import React from 'react'
import RegularContainer from './UI/RegularContainer'
import H2 from './UI/Typo/H2'
import H3 from './UI/Typo/H3'
import Paragraph from './UI/Typo/Paragraph'
import MainNavButton from './UI/Buttons/MainNavButton'
import InnerColorBox from './UI/InnerColorBox'
import Image from 'next/image'
import { TbSparkles, TbHeart, TbMoodSmile, TbStar } from "react-icons/tb"

export default function GyerekCoachingInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-gradient-to-b from-white via-[#fff5f5] to-white relative overflow-hidden'}>
        <Image src={'/crayon/Artboard 2.png'} width={700} height={700} alt="Gyerek coaching" className='absolute top-[0vh] -left-[15%]' />
        <Image src={'/crayon/Artboard 4.png'} width={700} height={700} alt="Gyerek coaching" className='absolute top-[30vh] -right-[15%]' />
        <Image src={'/crayon/Artboard 8.png'} width={700} height={700} alt="Gyerek coaching" className='absolute top-[120vh] -left-[15%]' />
        <Image src={'/crayon/Artboard 6.png'} width={700} height={700} alt="Gyerek coaching" className='absolute top-[200vh] -right-[15%]' />
        <div className='flex flex-col lg:gap-32 gap-20'>
            {/* Mi a gyerek coaching? - Playful intro */}
            <div className='flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-6 lg:w-1/2 relative'>
                {/* Decorative element */}
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-[#FFB6C1] rounded-full opacity-30 blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#87CEEB] rounded-full opacity-30 blur-xl"></div>
                
                <H2 classname={'text-[--green] relative'}>
                  Mi a gyerek coaching?
                </H2>
                <Paragraph>
                  A gyerek coaching egy támogató, fejlesztő folyamat, mely segíti a gyermekeket abban, hogy jobban 
                  megismerjék önmagukat, felismerjék erősségeiket és magabiztosabban kezeljék a mindennapi kihívásokat.
                </Paragraph>
                <Paragraph>
                  Kész megoldások helyett, kérdésekkel, játékos módszerekkel és pozitív visszajelzésekkel vezetjük a 
                  gyermeket az önálló gondolkodás és a problémamegoldás felé. A cél, hogy a gyermek megtanuljon hinni 
                  önmagában, és megtapasztalja, hogy képes hatással lenni a saját életére.
                </Paragraph>
              </div>
              
              <div className='lg:w-1/2 w-full'>
                <div className="relative bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-8 rounded-[3rem] shadow-xl transform">
                  <div className="bg-white p-6 rounded-3xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center gap-3 bg-[#FFE4E1] p-4 rounded-2xl">
                        <TbSparkles className='w-12 h-12 text-[#FF69B4]'/>
                        <Paragraph classname={'m-0 text-center text-sm font-semibold'}>Önismeret</Paragraph>
                      </div>
                      <div className="flex flex-col items-center gap-3 bg-[#E0F2F7] p-4 rounded-2xl">
                        <TbHeart className='w-12 h-12 text-[#87CEEB]'/>
                        <Paragraph classname={'m-0 text-center text-sm font-semibold'}>Önbizalom</Paragraph>
                      </div>
                      <div className="flex flex-col items-center gap-3 bg-[#F0FFF0] p-4 rounded-2xl">
                        <TbMoodSmile className='w-12 h-12 text-[#90EE90]'/>
                        <Paragraph classname={'m-0 text-center text-sm font-semibold'}>Játékosság</Paragraph>
                      </div>
                      <div className="flex flex-col items-center gap-3 bg-[#FFF8DC] p-4 rounded-2xl">
                        <TbStar className='w-12 h-12 text-[#FFD700]'/>
                        <Paragraph classname={'m-0 text-center text-sm font-semibold'}>Fejlődés</Paragraph>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Különbség felnőtt és gyerek coaching */}
            <div className='flex flex-col gap-8 px-4'>
              <div className="text-center relative">
                <H2 classname={'text-[--green] inline-block relative'}>
                  Miben különbözik a felnőtt coaching a gyerek coachingtól?
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#90EE90] opacity-30 rounded-full -z-10"></div>
                </H2>
              </div>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                {/* Felnőtt coaching */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[--green] to-[#3fffba] rounded-[2rem] opacity-20"></div>
                  <div className="relative bg-white border-4 border-[--green] p-8 rounded-[2rem]">
                    <H3 classname={'text-[--green] m-0 mb-4'}>Felnőtt coaching</H3>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 items-start">
                        <span className="text-[--green] mt-1 font-bold">→</span>
                        <Paragraph classname={'m-0'}>Tudatos célkitűzések</Paragraph>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[--green] mt-1 font-bold">→</span>
                        <Paragraph classname={'m-0'}>Teljesítményfókusz</Paragraph>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[--green] mt-1 font-bold">→</span>
                        <Paragraph classname={'m-0'}>Döntéshozatal</Paragraph>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Gyerek coaching */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FFB6C1] via-[#FFD700] to-[#87CEEB] rounded-[2rem] opacity-40"></div>
                  <div className="relative bg-gradient-to-br from-[#FFE4E1] to-[#E0F2F7] border-4 border-[#FF69B4] p-8 rounded-[2rem]">
                    <H3 classname={'text-[#FF1493] m-0 mb-4 flex items-center gap-2'}>
                      Gyerek coaching 
                      <span className="text-2xl">🎨</span>
                    </H3>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 items-start">
                        <span className="text-[#FF69B4] mt-1 font-bold text-xl">★</span>
                        <Paragraph classname={'m-0'}>Játékos módszerek</Paragraph>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#87CEEB] mt-1 font-bold text-xl">★</span>
                        <Paragraph classname={'m-0'}>Érzelmi támogatás</Paragraph>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#90EE90] mt-1 font-bold text-xl">★</span>
                        <Paragraph classname={'m-0'}>Vizuális eszközök</Paragraph>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-[#FFD700] mt-1 font-bold text-xl">★</span>
                        <Paragraph classname={'m-0'}>Családi bevonás</Paragraph>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FFE4E1] via-[#E0F2F7] to-[#F0FFF0] p-6 rounded-3xl border-l-8 border-[#FF69B4]">
                <Paragraph classname={'m-0 italic font-semibold text-[--green]'}>
                  💡 A gyerek coachingban gyakran a szülők is bevonódnak, hiszen a fejlődés a családi környezet 
                  támogatásával válik igazán tartóssá.
                </Paragraph>
              </div>
            </div>

            {/* Milyen eszközökkel dolgozunk? */}
            <div className='flex lg:flex-row-reverse flex-col items-center lg:gap-16 gap-8 px-4'>
              <div className='flex flex-col gap-6 lg:w-1/2'>
                <H2 classname={'text-[--green] relative'}>
                  Milyen eszközökkel dolgozunk?
                </H2>
                <Paragraph>
                  A gyerek coaching során életkornak megfelelő, játékos és kreatív eszközöket használunk, hogy a 
                  gyermek könnyedén és biztonságban tudjon megnyílni.
                </Paragraph>
                <Paragraph>
                  Gyakoriak a rajzos, kártyás, mesés vagy szimbólumos feladatok, melyek segítenek a gyerekeknek 
                  kifejezni érzéseiket és gondolataikat. Sokszor használunk érzelemkártyákat, motivációs játékokat, 
                  bábokat vagy akár mesealkotást.
                </Paragraph>
                <Paragraph classname={'italic text-[--green] font-semibold'}>
                  A folyamat során mindig az adott gyermek egyéni szükségleteihez és személyiségéhez igazodunk.
                </Paragraph>
              </div>
              
              <div className='lg:w-1/2 w-full'>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#FFE4E1] p-6 rounded-3xl shadow-lg border-4 border-[#FFB6C1] transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🎨</div>
                    <H3 classname={'text-[#FF1493] m-0 text-lg'}>Rajzos feladatok</H3>
                  </div>
                  <div className="bg-[#E0F2F7] p-6 rounded-3xl shadow-lg border-4 border-[#87CEEB] transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🃏</div>
                    <H3 classname={'text-[#4682B4] m-0 text-lg'}>Érzelemkártyák</H3>
                  </div>
                  <div className="bg-[#F0FFF0] p-6 rounded-3xl shadow-lg border-4 border-[#90EE90] transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">📚</div>
                    <H3 classname={'text-[#228B22] m-0 text-lg'}>Mesék</H3>
                  </div>
                  <div className="bg-[#FFF8DC] p-6 rounded-3xl shadow-lg border-4 border-[#FFD700] transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-3">🎭</div>
                    <H3 classname={'text-[#FF8C00] m-0 text-lg'}>Bábok & játékok</H3>
                  </div>
                </div>
              </div>
            </div>

            {/* Gyakorlati fejlesztési célok */}
            <div className='flex flex-col gap-8 px-4'>
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-[#90EE90] via-[#FFD700] to-[#FF69B4] p-2 rounded-3xl">
                  <div className="bg-white px-8 py-4 rounded-2xl">
                    <H2 classname={'text-[--green] m-0'}>Gyakori fejlesztési célok</H2>
                  </div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#FFE4E1] to-[#FFB6C1] p-6 rounded-[2rem] shadow-lg border-l-8 border-[#FF1493]">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FF69B4] rounded-full flex items-center justify-center text-3xl shadow-lg">
                    ⭐
                  </div>
                  <Paragraph classname={'m-0 font-semibold text-lg'}>
                    Az önbecsülés és az önbizalom fejlesztése
                  </Paragraph>
                </div>
                
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#E0F2F7] to-[#87CEEB] p-6 rounded-[2rem] shadow-lg border-l-8 border-[#4682B4]">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#87CEEB] rounded-full flex items-center justify-center text-3xl shadow-lg">
                    💙
                  </div>
                  <Paragraph classname={'m-0 font-semibold text-lg'}>
                    Szorongás és stressz kezelése
                  </Paragraph>
                </div>
                
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#F0FFF0] to-[#90EE90] p-6 rounded-[2rem] shadow-lg border-l-8 border-[#228B22]">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#90EE90] rounded-full flex items-center justify-center text-3xl shadow-lg">
                    🌱
                  </div>
                  <Paragraph classname={'m-0 font-semibold text-lg'}>
                    Reziliencia erősítése
                  </Paragraph>
                </div>
                
                <div className="flex items-center gap-4 bg-gradient-to-r from-[#FFF8DC] to-[#FFD700] p-6 rounded-[2rem] shadow-lg border-l-8 border-[#FF8C00]">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center text-3xl shadow-lg">
                    💪
                  </div>
                  <Paragraph classname={'m-0 font-semibold text-lg'}>
                    Megküzdési képességek kialakítása
                  </Paragraph>
                </div>
              </div>
            </div>

            {/* CTA Section - Playful */}
            <div className="px-4">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FF69B4] via-[#FFD700] to-[#87CEEB] rounded-[3rem] opacity-20 blur-xl"></div>
                <InnerColorBox title={'Gyerek Coaching'} titlecolor={'text-white'} text2={''} textcolor2={'text-white'} bgcolor={'bg-gradient-to-r from-[--green] to-[#3fffba] z-10 relative overflow-hidden'}>
                  <Image src={'/crayon/sticky-note.webp'} width={700} height={700} alt="Gyerek coaching" className='absolute top-0 -left-[15%] opacity-30' />
                    <Paragraph classname={'text-white text-center text-lg z-10'}>
                      Segítsük együtt gyermekedet abban, hogy magabiztosan, boldogan és tudatosan élje az életét!
                    </Paragraph>
                    <H3 classname={'text-white text-center z-10'}>
                      Hiszünk abban, hogy minden gyerek képes rá! 
                    </H3>
                    <MainNavButton link={'/ajanlatkeres'} text={'Ajánlatkérés'} classname={'self-center z-10'} />
                </InnerColorBox>
              </div>
            </div>
        </div>
    </RegularContainer>
  )
}
