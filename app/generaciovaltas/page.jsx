import GeneraciovaltasInner from "@/app/Components/GeneraciovaltasInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export default function GeneraciovaltasPage() {
  return (
    <>
        <SecondaryHero title={"Generációváltás"} image={'/szolgaltatasok/generaciovaltas.webp'}/>
        <GeneraciovaltasInner />
    </>
    
  )
}
