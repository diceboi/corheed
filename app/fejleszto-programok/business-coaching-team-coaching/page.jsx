import CoachingInner from "@/app/Components/CoachingInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export const metadata = {
  title: "Business Coaching & Team Coaching | Vezetői Fejlesztés | CoreHeed",
  description: "Személyre szabott business és team coaching folyamatok az üzleti célok elérése és a hatékony szervezeti működés érdekében. ICF minősített coachokkal.",
  keywords: "business coaching, team coaching, vezetői coaching, coaching vezetőknek, csapat coaching, szervezetfejlesztés, ICF coaching",
  openGraph: {
    title: "Business Coaching & Team Coaching | Vezetői Fejlesztés | CoreHeed",
    description: "Személyre szabott business és team coaching folyamatok az üzleti célok elérése és a hatékony szervezeti működés érdekében.",
    type: "website",
    url: "https://coreheed.hu/fejleszto-programok/business-coaching-team-coaching",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/business-coaching-team-coaching.webp",
        width: 1200,
        height: 630,
        alt: "Business coaching & team coaching"
      }
    ]
  }
};

export default function CoachingPage() {
  return (
    <>
        <SecondaryHero title={"Business coaching & team coaching"} image={'/szolgaltatasok/business-coaching-team-coaching.webp'}/>
        <CoachingInner />
    </>
  )
}
