import TrainingHero from "@/app/Components/UI/TrainingHero";
import Valtozaskezeles from "@/app/Components/Treningek/Valtozaskezeles";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";

export const metadata = {
  title: "Változáskezelés és reziliencia fejlesztés | Vállalati Tréning | Coreheed",
  description: "Önismereti tréning a változások kezeléséhez és a lelki rugalmasság fejlesztéséhez. Támogasd csapatod az átalakulások során munkatársaknak és vezetőknek!",
  keywords: "változáskezelés, reziliencia, lelki rugalmasság, alkalmazkodóképesség, change management, vezetői reziliencia, szervezeti változás",
  openGraph: {
    title: "Változáskezelés és reziliencia fejlesztés | Vállalati Tréning",
    description: "Fejleszd rezilienciádat és változáskezelési készségeidet! Tréning munkatársaknak és vezetőknek az átalakulások támogatásához.",
    type: "website",
    url: "https://coreheed.hu/vallalati-treningek/valtozaskezeles",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/valtozaskezeles.webp",
        width: 1200,
        height: 630,
        alt: "Változáskezelés és reziliencia fejlesztés tréning"
      }
    ]
  }
};

export default function ValtozaskezelesPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Vállalati tréningek', href: '/vallalati-treningek' },
          { label: 'Változáskezelés és reziliencia fejlesztés' }
        ]}
      />
      <TrainingHero 
        title="Változáskezelés és reziliencia fejlesztés" 
        image={'/szolgaltatasok/valtozaskezeles.webp'}
      />
      <Valtozaskezeles />
    </>
  );
}
