import TrainingHero from "@/app/Components/UI/TrainingHero";
import UgyfelszolgalatZGeneracio from "@/app/Components/Treningek/UgyfelszolgalatZGeneracio";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";

export const metadata = {
  title: "Ügyfélszolgálat a Z generáció világában | Gyakorlati Tréning | Coreheed",
  description: "Gyakorlati tréning az ügyfélszolgálat fejlesztéséhez Z generációs ügyfelek számára. Ismerd meg a fiatal ügyfelek elvárásait munkatársaknak és vezetőknek!",
  keywords: "Z generáció, ügyfélszolgálat, ügyfélélmény, customer experience, generációs marketing, fiatal ügyfelek, digitális kommunikáció",
  openGraph: {
    title: "Ügyfélszolgálat a Z generáció világában | Vállalati Tréning",
    description: "Fejleszd ügyfélszolgálati készségeidet a Z generáció igényeire! Tréning hatékony ügyfélkommunikációhoz.",
    type: "website",
    url: "https://coreheed.hu/vallalati-treningek/ugyfelszolgalat-z-generacio",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/ugyfelszolgalat.webp",
        width: 1200,
        height: 630,
        alt: "Ügyfélszolgálat a Z generáció világában tréning"
      }
    ]
  }
};

export default function UgyfelszolgalatZGeneracioPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Vállalati tréningek', href: '/vallalati-treningek' },
          { label: 'Ügyfélszolgálat a Z generáció világában' }
        ]}
      />
      <TrainingHero 
        title="Ügyfélszolgálat a Z generáció világában" 
        image={'/szolgaltatasok/ugyfelszolgalat.webp'}
      />
      <UgyfelszolgalatZGeneracio />
    </>
  );
}
