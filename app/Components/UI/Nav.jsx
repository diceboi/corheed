"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton";
import { useState, useEffect, useContext } from "react";
import { Context } from "@/app/Context";
import { motion } from "framer-motion";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import MainNavButton from "./Buttons/MainNavButton";

export default function Nav() {

  const { mobileMenuOpen, toggleMobileMenu } = useContext(Context);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const handleToggleSubMenu = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menus = [
    {
      title: "Rólunk",
      link: '/rolunk',
    },
    {
      title: "Vállalati tréningek",
      link: '/vallalati-treningek',
    },
    {
      title: "Fejlesztői programok",
      items: [
        {
          title: "Vezetőfejlesztés",
          link: "/fejlesztoi-programok/vezeto-fejlesztes",
        },
        {
          title: "Job-fit mérés",
          link: "/fejlesztoi-programok/jobfit-meres",
        },
        {
          title: "Business coaching / Team Coaching",
          link: "/fejlesztoi-programok/business-coaching-team-coaching",
        },
        {
          title: "Gyermek- és ifjúsági coaching",
          link: "/fejlesztoi-programok/gyermek-es-ifjusagi-coaching",
        },
        {
          title: "Tehetségmenedzsment",
          link: "/fejlesztoi-programok/tehetsegmenedzsment",
        },
        {
          title: "Szakmai csapatépítés",
          link: "/fejlesztoi-programok/szakmai-csapatepites",
        },
        {
          title: "Profile XT teszt",
          link: "/fejlesztoi-programok/profile-xt-teszt",
        },
        {
          title: "CAPtAin teszt",
          link: "/fejlesztoi-programok/captain-teszt",
        },
      ],
    },
    {
      title: "Generációváltás",
      items: [
        {
          title: "Generációk együttműködése program",
          link: "/generaciovaltas/generaciok-egyuttmukodese-program",
        },
        {
          title: "Cégutódlás, utódlástervezés",
          link: "/generaciovaltas/cegutodas-utodlastervezes",
        },
        {
          title: "Generációs különbségek a munkahelyen",
          link: "/generaciovaltas/generacios-kulonbsegek-a-munkahelyen",
        },
        {
          title: "Fiatalbarát munkahely program",
          link: "/generaciovaltas/fiatalbarat-munkahely-program",
        },
      ],
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Kapcsolat",
      link: "/kapcsolat",
    },
  ];

  return (
    <>
      <nav
        className={`flex flex-row items-center w-full bg-[--green] shadow-lg font-regular fixed top-0 transition-all duration-200 z-50`}
      >
        <div
          className={`flex flex-col justify-center w-full m-auto`}
        >
          <div className="w-full flex flex-row items-center px-4 h-20">
            <div className="flex flex-row items-center justify-start gap-8">
              <Link
                href="/"
                className={`flex flex-row items-center justify-start w-56 h-auto transition-all duration-200`}
              >
                  <Image
                    src="/logos/logo-base.webp"
                    alt="Logo"
                    width={300}
                    height={200}
                    className="w-32-h-auto"
                  />
              </Link>

              {/*Desktop Menu*/}
              <ul className="hidden lg:flex flex-row gap-2 text-lg">
                {menus.map((menu, index) => (
                  <NavButton key={index} {...menu} scrolled={isScrolled} />
                ))}
              </ul>
            </div>
            <div className="flex flex-row justify-end w-full">
              
              {/*Mobile Menu*/}

              <div className="lg:hidden">
                <TbMenu2
                  className={`min-w-8 min-h-8 text-white`}
                  onClick={toggleMobileMenu}
                />
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ right: "-100%", top: '0' }}
                    animate={{ right: "0", top: '0' }}
                    exit={{ right: "-100%", top: '0' }}
                    className="absolute flex flex-col gap-8 w-[80%] h-[100vh] bg-[--green] pt-16 px-8 shadow-2xl overflow-y-scroll"
                  >
                    <ul className="gap-2 md:gap-8 text-lg">
                      {menus.map((menu, index) => (
                        <NavButton 
                        key={index} 
                        {...menu} 
                        scrolled={isScrolled}
                        isOpen={openSubMenuIndex === index}
                        toggleSubMenu={() => handleToggleSubMenu(index)} />
                      ))}
                    </ul>
                    <button
                      className="absolute top-7 right-4 text-[white]"
                      onClick={toggleMobileMenu}
                    >
                      <IoClose className="min-w-8 min-h-8"/>
                    </button>
                    <MainNavButton text={'Ajánlatkérés'} link={'/ajanlatkeres'} />
                  </motion.div>
                )}
              </div>
              <MainNavButton
                text={"Ajánlatkérés"}
                link={"/ajanlatkeres"}
                classname={"lg:block hidden"}
                scrolled={isScrolled}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
