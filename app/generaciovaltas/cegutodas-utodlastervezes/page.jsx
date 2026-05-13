import CsaladiVallalkozasokInner from "../../Components/CsaladiVallalkozasokInner"
import SecondaryHero from "../../Components/UI/SecondaryHero"

export default function CsaladiVallalkozasoktPage() {
  return (
    <>
        <SecondaryHero title={"Családi vállalkozások utódlása"} image={'/szolgaltatasok/utodlas.webp'}/>
        <CsaladiVallalkozasokInner />
    </>
    
  )
}
