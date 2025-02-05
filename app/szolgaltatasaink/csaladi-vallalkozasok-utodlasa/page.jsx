import CsaladiVallalkozasokInner from "@/app/Components/CsaladiVallalkozasokInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export default function CsaladiVallalkozasoktPage() {
  return (
    <>
        <SecondaryHero title={"Családi vállalkozások utódlása"} image={'/szolgaltatasok/utodlas.webp'}/>
        <CsaladiVallalkozasokInner />
    </>
    
  )
}
