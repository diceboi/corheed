import KeszsegfejlesztesInner from "@/app/Components/KeszsegfejlesztesInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export default function KeszsegfejlesztesPage() {
  return (
    <>
        <SecondaryHero title="Készségfejlesztés" image={'/szolgaltatasok/keszsegfejlesztes.webp'}/>
        <KeszsegfejlesztesInner />
    </>
    
  )
}
