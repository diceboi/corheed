import JobfitMeresInner from "@/app/Components/JobfitMeresInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export const metadata = {
  title: "Job-fit mérés | Objektív Kiválasztási Eszköz | Coreheed",
  description: "Objektív job-fit mérés a sikeres kiválasztáshoz. Csökkentsd a rossz felvételek kockázatát és találd meg a megfelelő embert a megfelelő helyre!",
  keywords: "job-fit mérés, kiválasztás, HR teszt, munkahelyi viselkedés, beválás előrejelzés, objektív kiválasztás, talent assessment",
  openGraph: {
    title: "Job-fit mérés | Objektív Kiválasztási Eszköz",
    description: "Objektív adatok a sikeres kiválasztáshoz. A job-fit mérés előrejelzi a beválást és csökkenti a HR kockázatokat.",
    type: "website",
    url: "https://coreheed.hu/fejleszto-programok/jobfit-meres",
    images: [
      {
        url: "https://coreheed.hu/jobfit.webp",
        width: 1200,
        height: 630,
        alt: "Job-fit mérés program"
      }
    ]
  }
};

export default function JobfitMeresPage() {
  return (
    <>
        <SecondaryHero title="Job-fit mérés" image={'/jobfit.webp'}/>
        <JobfitMeresInner />
    </>
    
  )
}
