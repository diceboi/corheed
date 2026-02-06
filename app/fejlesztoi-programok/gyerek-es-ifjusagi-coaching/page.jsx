import GyerekCoachingInner from "@/app/Components/GyerekCoachingInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export const metadata = {
  title: "Gyerek Coaching | Játékos Fejlesztés Gyermekeknek | Coreheed",
  description: "Játékos, támogató coaching gyermekeknek. Önbizalom, önismeret és érzelmi fejlődés játékos módszerekkel. Segítünk a gyerekeknek hinni önmagukban!",
  keywords: "gyerek coaching, gyermek coaching, ifjúsági coaching, önbizalom fejlesztés gyerekeknek, szorongáskezelés gyerekeknek, reziliencia fejlesztés, játékos coaching",
  openGraph: {
    title: "Gyerek Coaching | Játékos Fejlesztés Gyermekeknek",
    description: "Támogató, játékos coaching folyamat gyermekeknek az önbizalom, önismeret és érzelmi fejlődés érdekében.",
    type: "website",
    url: "https://coreheed.hu/fejlesztoi-programok/gyerek-es-ifjusagi-coaching",
    images: [
      {
        url: "https://coreheed.hu/gyerek-coaching.webp",
        width: 1200,
        height: 630,
        alt: "Gyerek coaching program"
      }
    ]
  }
};

export default function GyerekCoachingPage() {
  return (
    <>
        <SecondaryHero title="Gyerek Coaching" image={'/gyerek-coaching.webp'}/>
        <GyerekCoachingInner />
    </>
    
  )
}
