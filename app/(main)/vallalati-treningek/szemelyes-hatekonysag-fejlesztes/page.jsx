import TrainingHero from "@/app/Components/UI/TrainingHero";
import SzemelyesHatekonysagFejlesztes from "@/app/Components/Treningek/SzemelyesHatekonysagFejlesztes";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";

export const metadata = {
  title: "Személyes hatékonyság fejlesztés | Produktivitás Tréning | Coreheed",
  description: "Önismereti tréning a személyes hatékonyság növeléséhez. Fejleszd időgazdálkodási és priorizálási készségeidet munkatársaknak és vezetőknek!",
  keywords: "személyes hatékonyság, időgazdálkodás, produktivitás, prioritáskezelés, Eisenhower-mátrix, Pomodoro technika, delegálás",
  openGraph: {
    title: "Személyes hatékonyság fejlesztés | Vállalati Tréning",
    description: "Fejleszd személyes hatékonyságodat! Tréning az időgazdálkodás, prioritáskezelés és produktivitás növeléséhez.",
    type: "website",
    url: "https://coreheed.hu/vallalati-treningek/szemelyes-hatekonysag-fejlesztes",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/szemelyes-hatekonysag.webp",
        width: 1200,
        height: 630,
        alt: "Személyes hatékonyság fejlesztés tréning"
      }
    ]
  }
};

export default function SzemelyesHatekonysagFejlesztesPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Vállalati tréningek', href: '/vallalati-treningek' },
          { label: 'Személyes hatékonyság fejlesztés' }
        ]}
      />
      <TrainingHero 
        title="Személyes hatékonyság fejlesztés" 
        image={'/szolgaltatasok/szemelyes-hatekonysag.webp'}
      />
      <SzemelyesHatekonysagFejlesztes />
    </>
  );
}
