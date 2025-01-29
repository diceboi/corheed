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
      title: "Szolgáltatásaink",
      items: [
        {
          title: "Generációk együttműködése program",
          link: "/szolgaltatasaink/generaciok-egyuttmukodese-program",
        },
        {
          title: "Fiatalbarát munkahely program",
          link: "/szolgaltatasaink/fiatalbarat-munkahely-program",
        },
        {
          title: "Családi vállalkozások utódlása",
          link: "/szolgaltatasaink/csaladi-vallalkozasok-utodlasa",
        },
        {
          title: "Készségfejlesztés",
          link: "/szolgaltatasaink/keszsegfejlesztes",
        },
        {
          title: "Tehetségmenedzsment",
          link: "/szolgaltatasaink/tehetsegmenedzsment",
        },
        {
          title: "Coaching / Teamcoaching",
          link: "/szolgaltatasaink/coaching-teamcoaching",
        },
        {
          title: "Profile XT teszt",
          link: "/szolgaltatasaink/profile-xt-teszt",
        },
      ],
    },
    {
      title: "Generációváltás",
      link: "/generaciovaltas",
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
          className={`flex flex-col justify-center w-11/12 m-auto h-20`}
        >
          <div className="w-full flex flex-row items-center px-1 py-1">
            <div className="flex flex-row items-center justify-start gap-8">
              <Link
                href="/"
                className={`flex flex-row items-center justify-start w-48 h-8 transition-all duration-200`}
              >
                  <Image
                    src="/logos/logo-base.webp"
                    alt="Logo"
                    width={250}
                    height={50}
                    className=""
                  />
              </Link>

              {/*Desktop Menu*/}
              <ul className="hidden md:flex flex-row gap-2 text-lg">
                {menus.map((menu, index) => (
                  <NavButton key={index} {...menu} scrolled={isScrolled} />
                ))}
              </ul>
            </div>
            <div className="flex flex-row justify-end w-full">
              <MainNavButton
                text={"Ajánlatkérés"}
                link={"/ajanlatkeres"}
                classname={"md:block hidden"}
                scrolled={isScrolled}
              />
              {/*Mobile Menu*/}

              <div className="md:hidden">
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
