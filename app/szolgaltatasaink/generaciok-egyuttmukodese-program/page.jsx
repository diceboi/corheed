import GeneraciokInner from "@/app/Components/GeneraciokInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export default function GeneraciokPage() {
  return (
    <>
        <SecondaryHero title="Generációk együttműködése program" image={'/szolgaltatasok/generaciok.webp'}/>
        <GeneraciokInner />
    </>
    
  )
}
