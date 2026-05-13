import VallalatiTreningekInner from "@/app/Components/VallalatiTreningekInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export default function VallalatiTreningekPage() {
  return (
    <>
        <SecondaryHero title="Vállalati tréningek" image={'/szolgaltatasok/keszsegfejlesztes.webp'}/>
        <VallalatiTreningekInner />
    </>
    
  )
}
