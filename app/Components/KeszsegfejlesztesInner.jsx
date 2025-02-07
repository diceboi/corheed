import React from "react";
import RegularContainer from "./UI/RegularContainer";
import SecondaryHero from "./UI/SecondaryHero";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import Paragraph from "./UI/Typo/Paragraph";
import Label from "./UI/Typo/Label";
import Image from "next/image";
import {
  TbLeaf,
  TbHeart,
  TbMoodHeart,
  TbMessage2Bolt,
  TbDeviceMobileMessage,
} from "react-icons/tb";
import MainNavButton from "./UI/Buttons/MainNavButton";
import IconBox from "./UI/IconBox";
import InnerColorBox from "./UI/InnerColorBox";
import SzolgaltatasokTile from "./UI/SzolgaltatasokTile";
import KeszsegfejlesztesTile from "./UI/KeszsegfejlesztesTile";

export default function KeszsegfejlesztesInner() {
  return (
    <RegularContainer classname={"lg:py-20 py-8 bg-white"}>
      <div className="flex flex-col lg:gap-40 gap-20">
        <div className="flex lg:flex-row flex-col items-center lg:gap-16 gap-8 px-4">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <H2 classname={"text-[--green]"}>Élményalapú készségfejlesztés</H2>
            <Paragraph>
              Készségfejlesztő-, együttműködést fejlesztő programjaink az
              élményalapú tanulást és az ismeretek mindennapi életbe történő
              átültetését célozzák meg. Az elméleti ismereteken és
              készségfejlesztésen túl, azonnal használható gyakorlati eszközöket
              is adunk a résztvevők kezébe.
            </Paragraph>
            <Paragraph>
              Programjaink megtervezésénél alapos szakmai előkészítő munkát
              végzünk, mivel kiemelten fontos számunkra, hogy programjaink
              hatékony szervezetfejlesztési eszközként támogassák a vállalat
              stratégiájának megvalósulását.
            </Paragraph>
          </div>
          <div className="relative flex flex-col gap-4 lg:w-1/2 w-full lg:min-h-[500px] min-h-[300px] rounded-3xl overflow-hidden">
            <Image
              src={"/szolgaltatasok/keszsegfejlesztes2.webp"}
              fill
              alt="Készségfejlesztés"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 px-4">
          <H2 classname={'text-[--green]'}>Programjaink</H2>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-4 ">
            <KeszsegfejlesztesTile
              image={"/szolgaltatasok/generacios.webp"}
              shortwords={'alapozó, ismeretátadó, érzékenyítő tréning'}
              title={"Generációs különbségek a munkahelyen"}
              text={'Készülj fel a legfiatalabb munkavállalók megjelenésére! Tudj meg többet a különböző generációk működéséről, attitűdjéről és építsd be ezeket a vállalati csapatműködésbe!'}
              link={"/ajanlatkeres"}
            />
            <KeszsegfejlesztesTile
              image={"/szolgaltatasok/asszertiv.webp"}
              shortwords={'kommunikációfejlesztés, készségfejlesztő tréning'}
              title={"Asszertív kommunikáció - generációs sajátoságokkal"}
              text={'Ismerd meg és sajátítsd el azokat a kommunikációs technikákat és készségeket, melyekkel transzparensebben és hatékonyabban tudsz kommunikálni a többgenerációs csapatokban.'}
              link={"/ajanlatkeres"}
            />
            <KeszsegfejlesztesTile
              image={"/szolgaltatasok/stressz.webp"}
              shortwords={'önismereti, készségfejlesztő tréning'}
              title={"Stressz- és konfliktuskezelés"}
              text={'Fordítsd át a stresszben lévő energiát a megoldások megtalálására! Sajátítsd el a konfliktusok hatékony kezeléséhez szükséges eszköztárat.'}
              link={"/ajanlatkeres"}
            />
            <KeszsegfejlesztesTile
              image={"/szolgaltatasok/valtozaskezeles.webp"}
              shortwords={'önismereti, készségfejlesztő tréning'}
              title={"Változáskezelés, reziliencia fejlesztés"}
              text={'Változásokkal, átalakulással nézel szembe? Fejleszd csapatod reziliencia, vagyis lelki állóképesség szintjét, hogy eredményesebben tudjon megküzdeni az új helyzetekkel.'}
              link={"/ajanlatkeres"}
            />
            <KeszsegfejlesztesTile
              image={"/szolgaltatasok/ugyfelszolgalat.webp"}
              shortwords={'gyakorlati know-how, ismeretátadó tréning'}
              title={"Ügyfélszolgálat a Z generáció világában"}
              text={'Mivel szólítsd meg a Z-generációs ügyfeleidet? Hogyan kommunikáljon az ügyfélszolgálat? Segítünk megérteni a jövő generációjának fontos igényeit, hogy könnyebben elérhesd őket.'}
              link={"/ajanlatkeres"}
            />
            <KeszsegfejlesztesTile
              image={"/szolgaltatasok/toborzas.webp"}
              shortwords={'gyakorlati know-how, ismeretátadó tréning'}
              title={"Toborzás a Z generáció világában"}
              text={'Mi alapján választ a hasonló lehetőségek közül egy fiatal munkavállaló? Tudj meg többet a fiatal generáció számára vonzó vállalati értékekről, hogy Téged válasszon!'}
              link={"/ajanlatkeres"}
            />
            <KeszsegfejlesztesTile
              image={"/szolgaltatasok/prezentacios.webp"}
              shortwords={'alapozó, ismeretátadó, érzékenyítő tréning'}
              title={"Prezentációs technikák"}
              text={'Add át hatékonyabban azt a tudást, amivel már rendelkezel! Sajátítsd el az AI alapú eszközöket, amivel gyorsabban és színesebben tudod elkészíteni a prezentációdat!'}
              link={"/ajanlatkeres"}
            />
            <KeszsegfejlesztesTile
              image={"/szolgaltatasok/egyuttmukodesfejlesztes.webp"}
              shortwords={'önismereti, készségfejlesztő tréning'}
              title={"Együttműködésfejlesztés"}
              text={'Fejleszd csapatod együttműködését, hogy eredményesebben érjétek el a kitűzött célokat! Az együttműködés abban is segíti a csapatot, hogy könnyebben megküzdjön az új helyzetekkel.'}
              link={"/ajanlatkeres"}
            />
            <KeszsegfejlesztesTile
              image={"/szolgaltatasok/szemelyes-hatekonysag.webp"}
              shortwords={'önismereti, készségfejlesztő tréning'}
              title={"Személyes hatékonyság fejlesztés"}
              text={'Növeld tudatosan a személyes hatékonyságodat, hogy a tevékenységek könnyebben, tervezhetőbben és gyorsabban végrehajthatóvá váljanak.'}
              link={"/ajanlatkeres"}
            />
          </div>
        </div>
      </div>
    </RegularContainer>
  );
}
