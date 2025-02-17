import RegularContainer from "./RegularContainer";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

import {
  TbMail,
  TbBrandLinkedin,
  TbPhone,
  TbMapPin,
  TbClock,
} from "react-icons/tb";
import Paragraph from "./Typo/Paragraph";

export default function Footer() {
  return (
    <>
      <RegularContainer classname={"bg-[--black] py-20 px-4"}>
        <div className="flex flex-col gap-16 w-full">
          <div className="flex lg:flex-row flex-col gap-16 w-full justify-between lg:items-start items-center">
            <div className="flex flex-col gap-8 items-center">
            <Image
                src={"/logos/coreheed-square-logo-mint.svg"}
                width={100}
                height={300}
                alt={"footer logo"}
              />
              <h3 className="text-[--lightgreen]">Coreheed Consulting Kft.</h3>
              <div className="flex flex-nowrap gap-2">
                <Link href="https://www.facebook.com/profile.php?id=61572865276294" target="__blank"><FaFacebook className="min-w-6 h-auto text-[--lightgreen]"/></Link>
                <Link href="http://linkedin.com/company/coreheed-consulting-kft" target="__blank"><FaLinkedin className="min-w-6 h-auto text-[--lightgreen]"/></Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center">
              
              <div className="flex flex-col gap-2 lg:text-left text-center">
              <h3 className="text-[--yellow] font-bold text-lg pb-8 ">Elérhetőségek</h3>
                <div className="flex flex-nowrap items-center gap-2">
                  <TbMail className="min-w-6 min-h-6 text-[--yellow]" />
                  <button href="mailto:info@coreheed.hu" className="text-[--lightgreen]">
                    info@coreheed.hu
                  </button>
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <TbPhone className="min-w-6 min-h-6 text-[--yellow]" />
                  <button href="tel:06 30 123 4567" className="text-[--lightgreen]">
                    06 30 328 2517
                  </button>
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <TbMapPin className="min-w-6 min-h-6 text-[--yellow]" />
                  <button className="text-[--lightgreen]">
                    2040. Budaörs
                  </button>
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <TbClock className="min-w-6 min-h-6 text-[--yellow]" />
                  <button className="text-[--lightgreen]">Hét-Pén 09:00-16:00</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="flex flex-col lg:items-start items-center gap-2 ">
                <h3 className="text-[--yellow] font-bold text-lg pb-8 lg:text-left text-center">Szolgáltatások</h3>
                <Link
                  href={"/szolgaltatasaink/generaciok-egyuttmukodese-program"}
                  className="text-[--lightgreen]"
                >
                  Generációk együttműködése program
                </Link>
                <Link
                  href={"/szolgaltatasaink/fiatalbarat-munkahely-program"}
                  className="text-[--lightgreen]"
                >
                  Fiatalbarát munkahely program
                </Link>
                <Link
                  href={"/szolgaltatasaink/csaladi-vallalkozasok-utodlasa"}
                  className="text-[--lightgreen]"
                >
                  Családi vállalkozások utódlása
                </Link>
                <Link
                  href={"/szolgaltatasaink/keszsegfejlesztes"}
                  className="text-[--lightgreen]"
                >
                  Készségfejlesztés
                </Link>
                <Link
                  href={"/szolgaltatasaink/tehetsegmenedzsment"}
                  className="text-[--lightgreen]"
                >
                  Tehetségmenedzsment
                </Link>
                <Link
                  href={"/szolgaltatasaink/coaching-teamcoaching"}
                  className="text-[--lightgreen]"
                >
                  Coaching / Teamcoaching
                </Link>
                <Link
                  href={"/szolgaltatasaink/profile-xt-teszt"}
                  className="text-[--lightgreen]"
                >
                  Profile XT teszt
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="flex flex-col lg:items-start items-center gap-2">
                <h3 className="text-[--yellow] font-bold text-lg pb-8">Információk</h3>
                <Link
                  href={"/adatkezelesi-tajekoztato"}
                  className="text-[--lightgreen]"
                >
                  Adatkezelés
                </Link>
                <Link
                  href={"/kapcsolat"}
                  className="text-[--lightgreen]"
                >
                  Kapcsolat
                </Link>
                <Link
                  href={"/ajanlatkeres"}
                  className="text-[--lightgreen]"
                >
                  Ajánlatkérés
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RegularContainer>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-4 bg-black py-8 text-neutral-700 p-4">
        <p className="text-center">
          coreheed.hu 2019 - 2025 @ Minden jog fenntartva
        </p>
      </div>
    </>
  );
}
