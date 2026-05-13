import GeneraciokInner from "../../Components/GeneraciokInner"
import SecondaryHero from "../../Components/UI/SecondaryHero"

export default function GeneraciokPage() {
  return (
    <>
        <SecondaryHero title="Generációk együttműködése program" image={'/szolgaltatasok/generaciok.webp'}/>
        <GeneraciokInner />
    </>
    
  )
}
