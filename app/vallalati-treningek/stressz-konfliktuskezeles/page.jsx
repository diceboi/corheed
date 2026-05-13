import TrainingHero from "@/app/Components/UI/TrainingHero";
import StresszKonfliktuskezeles from "@/app/Components/Treningek/StresszKonfliktuskezeles";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";

export const metadata = {
  title: "Stressz- és konfliktuskezelés | Önismereti Tréning | Coreheed",
  description: "Önismereti és készségfejlesztő tréning a stressz és konfliktusok hatékony kezeléséhez. Alakítsd át a stresszt erőforrássá munkatársaknak és vezetőknek!",
  keywords: "stresszkezelés, konfliktuskezelés, kiégés megelőzése, reziliencia, érzelmi tudatosság, vezetői stresszkezelés, munkahelyi wellbeing",
  openGraph: {
    title: "Stressz- és konfliktuskezelés | Vállalati Tréning",
    description: "Fejleszd stressztűrő képességedet és konfliktuskezelési készségeidet! Tréning munkatársaknak és vezetőknek.",
    type: "website",
    url: "https://coreheed.hu/vallalati-treningek/stressz-konfliktuskezeles",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/stressz.webp",
        width: 1200,
        height: 630,
        alt: "Stressz- és konfliktuskezelés tréning"
      }
    ]
  }
};

export default function StresszKonfliktuskezelesPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Vállalati tréningek', href: '/vallalati-treningek' },
          { label: 'Stressz- és konfliktuskezelés' }
        ]}
      />
      <TrainingHero 
        title="Stressz- és konfliktuskezelés" 
        image={'/szolgaltatasok/stressz.webp'}
      />
      <StresszKonfliktuskezeles />
    </>
  );
}
