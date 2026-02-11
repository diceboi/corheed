import SecondaryHero from "@/app/Components/UI/SecondaryHero";
import GeneraciosKulonbsegek from "@/app/Components/Treningek/GeneraciosKulonbsegek";

export const metadata = {
  title: "Generációs különbségek a munkahelyen | Vállalati Tréning | Coreheed",
  description: "Alapozó és vezetői tréning a generációs különbségek kezeléséhez. Ismerd meg a Z generáció munkahelyi elvárásait és építs hatékonyabb csapatot!",
  keywords: "generációs különbségek, Z generáció, multigenerációs csapat, vállalati tréning, munkavállalói élmény, leadership training, generációkezelés",
  openGraph: {
    title: "Generációs különbségek a munkahelyen | Vállalati Tréning",
    description: "Készülj fel a legfiatalabb munkavállalók megjelenésére! Tréning munkatársaknak és vezetőknek a generációs különbségek hatékony kezeléséhez.",
    type: "website",
    url: "https://coreheed.hu/vallalati-treningek/generacios-kulonbsegek",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/generacios.webp",
        width: 1200,
        height: 630,
        alt: "Generációs különbségek a munkahelyen tréning"
      }
    ]
  }
};

export default function GeneraciosKulonbsegekPage() {
  return (
    <>
        <SecondaryHero title="Generációs különbségek – munkahelyi érzékenyítés" image={'/szolgaltatasok/generacios.webp'}/>
        <GeneraciosKulonbsegek />
    </>
    
  )
}
