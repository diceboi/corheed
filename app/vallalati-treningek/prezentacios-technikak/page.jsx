import TrainingHero from "@/app/Components/UI/TrainingHero";
import PrezentaciosTechnikak from "@/app/Components/Treningek/PrezentaciosTechnikak";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";

export const metadata = {
  title: "Prezentációs technikák | Kommunikációs Tréning | Coreheed",
  description: "Gyakorlati tréning a hatékony prezentáláshoz AI eszközökkel. Fejleszd előadói készségeidet és készíts látványos prezentációkat munkatársaknak és vezetőknek!",
  keywords: "prezentációs technikák, előadói készség, storytelling, AI prezentáció, vizuális kommunikáció, vezetői prezentáció, public speaking",
  openGraph: {
    title: "Prezentációs technikák | Vállalati Tréning",
    description: "Fejleszd prezentációs készségeidet! Tréning a hatékony előadásmódhoz és modern AI eszközök használatához.",
    type: "website",
    url: "https://coreheed.hu/vallalati-treningek/prezentacios-technikak",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/prezentacios.webp",
        width: 1200,
        height: 630,
        alt: "Prezentációs technikák tréning"
      }
    ]
  }
};

export default function PrezentaciosTechnikakPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Vállalati tréningek', href: '/vallalati-treningek' },
          { label: 'Prezentációs technikák' }
        ]}
      />
      <TrainingHero 
        title="Prezentációs technikák" 
        image={'/szolgaltatasok/prezentacios.webp'}
      />
      <PrezentaciosTechnikak />
    </>
  );
}
