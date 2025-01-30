import FiatalbaratInner from "@/app/Components/FiatalbaratInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export default function FiatalbaratPage() {
  return (
    <>
        <SecondaryHero title="Értékteremtő, fenntartható vállalati működés a Z-generáció világában" subtitle={'Fiatalbarát munkahely program'} image={'/szolgaltatasok/fiatalbarat.webp'}/>
        <FiatalbaratInner />
    </>
    
  )
}
