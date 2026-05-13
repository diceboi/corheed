import TrainingHero from "@/app/Components/UI/TrainingHero";
import AsszertivKommunikacio from "@/app/Components/Treningek/AsszertivKommunikacio";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";

export const metadata = {
  title: "Asszertív kommunikáció | Kommunikációfejlesztő Tréning | Coreheed",
  description: "Kommunikációfejlesztő tréning munkatársaknak és vezetőknek. Tanulj meg magabiztosan, tiszteletteljesen és hatékonyan kommunikálni a munkahelyen!",
  keywords: "asszertív kommunikáció, kommunikációfejlesztés, határkijelölés, konfliktuskezelés, vezetői kommunikáció, készségfejlesztő tréning",
  openGraph: {
    title: "Asszertív kommunikáció | Vállalati Tréning",
    description: "Fejleszd kommunikációs készségeidet! Tréning az asszertív kommunikáció elsajátításához munkatársaknak és vezetőknek.",
    type: "website",
    url: "https://coreheed.hu/vallalati-treningek/asszertiv-kommunikacio",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/asszertiv.webp",
        width: 1200,
        height: 630,
        alt: "Asszertív kommunikáció tréning"
      }
    ]
  }
};

export default function AsszertivKommunikacioPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Vállalati tréningek', href: '/vallalati-treningek' },
          { label: 'Asszertív kommunikáció' }
        ]}
      />
      <TrainingHero 
        title="Asszertív kommunikáció" 
        image={'/szolgaltatasok/asszertiv.webp'}
      />
      <AsszertivKommunikacio />
    </>
  );
}
