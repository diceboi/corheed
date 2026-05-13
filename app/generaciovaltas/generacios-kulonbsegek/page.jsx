import SecondaryHero from "@/app/Components/UI/SecondaryHero";
import GeneraciosKulonbsegek from "@/app/Components/Treningek/GeneraciosKulonbsegek";

export const metadata = {
  title: "Generációs különbségek – munkahelyi érzékenyítés | Generációváltás | Coreheed",
  description: "Alapozó, ismeretátadó, érzékenyítő tréning a generációk közötti együttműködés megértéséhez és fejlesztéséhez.",
  keywords: "generációváltás, generációs különbségek, baby boomer, x generáció, y generáció, z generáció, alfa generáció, munkahelyi konfliktus",
  openGraph: {
    title: "Generációs különbségek – munkahelyi érzékenyítés | Generációváltás",
    description: "Értsd meg a generációs különbségeket a munkahelyen! Tréning 5 különböző generáció együttműködésének támogatására.",
    type: "website",
    url: "https://coreheed.hu/generaciovaltas/generacios-kulonbsegek",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/generacios.webp",
        width: 1200,
        height: 630,
        alt: "Generációs különbségek tréning"
      }
    ]
  }
};

export default function GeneraciovaltasGeneraciosKulonbsegekPage() {
  return (
    <>
      <SecondaryHero
        title="Generációs különbségek – munkahelyi érzékenyítés"
        image={'/szolgaltatasok/generacios.webp'}
      />
      <GeneraciosKulonbsegek />
    </>
  );
}
