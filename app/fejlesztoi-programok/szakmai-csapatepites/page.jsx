import SzakmaiCsapatepitesInner from "@/app/Components/SzakmaiCsapatepitesInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export const metadata = {
  title: "Szakmai Csapatépítés | Élményalapú Fejlesztés | Coreheed",
  description: "Fejleszd csapatod együttműködését és szakmai kompetenciáit élvezetes, interaktív szakmai csapatépítéssel! Valós szituációk, kreatív feladatok, erősebb kohézió.",
  keywords: "szakmai csapatépítés, csapatépítő tréning, csapatkohézió erősítése, élményalapú tanulás, kompetenciafejlesztés, együttműködés fejlesztése",
  openGraph: {
    title: "Szakmai Csapatépítés | Élményalapú Fejlesztés",
    description: "Élvezetes, interaktív program, mely valós munkaszituációkon keresztül erősíti a csapatkohéziót és fejleszti a szakmai kompetenciákat.",
    type: "website",
    url: "https://coreheed.hu/fejlesztoi-programok/szakmai-csapatepites",
    images: [
      {
        url: "https://coreheed.hu/csapat.webp",
        width: 1200,
        height: 630,
        alt: "Szakmai csapatépítés"
      }
    ]
  }
};

export default function SzakmaiCsapatepitesPage() {
  return (
    <>
        <SecondaryHero title="Szakmai csapatépítés" image={'/csapatepito.webp'}/>
        <SzakmaiCsapatepitesInner />
    </>
    
  )
}
