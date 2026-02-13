import RegularContainer from "./RegularContainer";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

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
                <Link href="https://www.facebook.com/profile.php?id=61572865276294" target="__blank"><FaFacebook className="min-w-6 h-auto text-[--lightgreen]" /></Link>
                <Link href="http://linkedin.com/company/coreheed-consulting-kft" target="__blank"><FaLinkedin className="min-w-6 h-auto text-[--lightgreen]" /></Link>
                <Link href="https://www.instagram.com/coreheed_consulting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="__blank"><FaInstagram className="min-w-6 h-auto text-[--lightgreen]" /></Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center">

              <div className="flex flex-col gap-2 lg:text-left text-center">
                <h3 className="text-[--yellow] font-bold text-lg pb-8 ">Elérhetőségek</h3>
                <div className="flex flex-nowrap items-center gap-2">
                  <TbMail className="min-w-6 min-h-6 text-[--yellow]" />
                  <a href="mailto:info@coreheed.hu" className="text-[--lightgreen]">
                    info@coreheed.hu
                  </a>
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <TbPhone className="min-w-6 min-h-6 text-[--yellow]" />
                  <a href="tel:06 30 328 2517" className="text-[--lightgreen]">
                    06 30 328 2517
                  </a>
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <TbMapPin className="min-w-6 min-h-6 text-[--yellow]" />
                  <p className="text-[--lightgreen]">
                    2040. Budaörs
                  </p>
                </div>
                <div className="flex flex-nowrap items-center gap-2">
                  <TbClock className="min-w-6 min-h-6 text-[--yellow]" />
                  <p className="text-[--lightgreen]">Hét-Pén 09:00-16:00</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="flex flex-col lg:items-start items-center gap-2 ">
                <h3 className="text-[--yellow] font-bold text-lg pb-8 lg:text-left text-center">Szolgáltatások</h3>
                <Link
                  href={"/generaciovaltas/generaciok-egyuttmukodese-program"}
                  className="text-[--lightgreen]"
                >
                  Generációk együttműködése program
                </Link>
                <Link
                  href={"/generaciovaltas/fiatalbarat-munkahely-program"}
                  className="text-[--lightgreen]"
                >
                  Fiatalbarát munkahely program
                </Link>
                <Link
                  href={"/generaciovaltas/cegutodas-utodlastervezes"}
                  className="text-[--lightgreen]"
                >
                  Családi vállalkozások utódlása
                </Link>
                <Link
                  href={"/vallalati-treningek"}
                  className="text-[--lightgreen]"
                >
                  Vállalati tréningek
                </Link>
                <Link
                  href={"/fejleszto-programok/tehetsegmenedzsment"}
                  className="text-[--lightgreen]"
                >
                  Tehetségmenedzsment
                </Link>
                <Link
                  href={"/fejleszto-programok/business-coaching-team-coaching"}
                  className="text-[--lightgreen]"
                >
                  Coaching / Teamcoaching
                </Link>
                <Link
                  href={"/fejleszto-programok/profile-xt-teszt"}
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
