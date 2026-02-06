import TrainingHero from "@/app/Components/UI/TrainingHero";
import ToborzasZGeneracio from "@/app/Components/Treningek/ToborzasZGeneracio";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";

export const metadata = {
  title: "Toborzás a Z generáció világában | HR Tréning | Coreheed",
  description: "Gyakorlati HR tréning a Z generációs toborzáshoz. Ismerd meg, mi tesz vonzóvá egy munkáltatót a fiatal jelöltek szemében munkatársaknak és vezetőknek!",
  keywords: "Z generáció toborzás, employer branding, fiatal munkavállalók, HR tréning, munkáltatói márka, recruitment, talent management",
  openGraph: {
    title: "Toborzás a Z generáció világában | Vállalati Tréning",
    description: "Fejleszd toborzási készségeidet a Z generáció igényeire! Tréning HR szakembereknek és vezetőknek.",
    type: "website",
    url: "https://coreheed.hu/vallalati-treningek/toborzas-z-generacio",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/toborzas.webp",
        width: 1200,
        height: 630,
        alt: "Toborzás a Z generáció világában tréning"
      }
    ]
  }
};

export default function ToborzasZGeneracioPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Vállalati tréningek', href: '/vallalati-treningek' },
          { label: 'Toborzás a Z generáció világában' }
        ]}
      />
      <TrainingHero 
        title="Toborzás a Z generáció világában" 
        image={'/szolgaltatasok/toborzas.webp'}
      />
      <ToborzasZGeneracio />
    </>
  );
}
