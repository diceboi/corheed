import TrainingHero from "@/app/Components/UI/TrainingHero";
import EgyuttmukodesFejelsztes from "@/app/Components/Treningek/EgyuttmukodesFejelsztes";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";

export const metadata = {
  title: "Együttműködésfejlesztés | Csapatépítő Tréning | Coreheed",
  description: "Önismereti és készségfejlesztő tréning a hatékony csapatmunkához. Fejleszd a csapatdinamikát és az együttműködést munkatársaknak és vezetőknek!",
  keywords: "együttműködésfejlesztés, csapatdinamika, team building, Belbin, agilis módszerek, facilitáció, csapatmunka fejlesztés",
  openGraph: {
    title: "Együttműködésfejlesztés | Vállalati Tréning",
    description: "Fejleszd csapatod együttműködését! Tréning a hatékony csapatmunka és strukturált folyamatok kialakításához.",
    type: "website",
    url: "https://coreheed.hu/vallalati-treningek/egyuttmukodes-fejlesztes",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/egyuttmukodesfejlesztes.webp",
        width: 1200,
        height: 630,
        alt: "Együttműködésfejlesztés tréning"
      }
    ]
  }
};

export default function EgyuttmukodesFejelsztesPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Vállalati tréningek', href: '/vallalati-treningek' },
          { label: 'Együttműködésfejlesztés' }
        ]}
      />
      <TrainingHero 
        title="Együttműködésfejlesztés" 
        image={'/szolgaltatasok/egyuttmukodesfejlesztes.webp'}
      />
      <EgyuttmukodesFejelsztes />
    </>
  );
}
