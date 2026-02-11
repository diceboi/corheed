import VezetofejlesztesInner from "@/app/Components/VezetofejlesztesInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export const metadata = {
  title: "Vezetőfejlesztés | Stratégiai Vezetői Fejlesztés | Coreheed",
  description: "Komplex vezetőfejlesztési program vezetői készségek, önismeret és stratégiai gondolkodás fejlesztésére. Tudatos befektetés a szervezet jövőjébe!",
  keywords: "vezetőfejlesztés, leadership development, vezetői készségek, business coaching, vezetői identitás, stratégiai gondolkodás, change management",
  openGraph: {
    title: "Vezetőfejlesztés | Stratégiai Vezetői Fejlesztés",
    description: "Komplex vezetőfejlesztési program önismeret, készségfejlesztés és stratégiai gondolkodás erősítésére. Támogassuk együtt a vezetőidet!",
    type: "website",
    url: "https://coreheed.hu/fejleszto-programok/vezeto-fejlesztes",
    images: [
      {
        url: "https://coreheed.hu/szolgaltatasok/vezetofejlesztes.webp",
        width: 1200,
        height: 630,
        alt: "Vezetőfejlesztés program"
      }
    ]
  }
};

export default function VezetofejlesztesPage() {
  return (
    <>
        <SecondaryHero title="Vezetőfejlesztés" image={'/vezetofejlesztes.webp'}/>
        <VezetofejlesztesInner />
    </>
    
  )
}
