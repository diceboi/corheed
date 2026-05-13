import ProfileXTInner from "../../Components/ProfileXTInner"
import SecondaryHero from "../../Components/UI/SecondaryHero"

export default function ProfileXTPage() {
  return (
    <>
        <SecondaryHero title="Profile XT kompetenciamérés" image={'/szolgaltatasok/profile-xt.webp'}/>
        <ProfileXTInner />
    </>
    
  )
}
