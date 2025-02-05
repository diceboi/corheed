import CoachingInner from "@/app/Components/CoachingInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export default function CoachingPage() {
  return (
    <>
        <SecondaryHero title={"Business coaching / Team coaching"} image={'/szolgaltatasok/coaching.webp'}/>
        <CoachingInner />
    </>
    
  )
}
