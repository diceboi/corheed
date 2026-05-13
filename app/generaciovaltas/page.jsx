import GeneraciovaltasInner from "../../Components/GeneraciovaltasInner"
import SecondaryHero from "../../Components/UI/SecondaryHero"

export default function GeneraciovaltasPage() {
  return (
    <>
        <SecondaryHero title={"Generációváltás"} image={'/szolgaltatasok/generaciovaltas.webp'}/>
        <GeneraciovaltasInner />
    </>
    
  )
}
