import ProfileXTInner from "@/app/Components/ProfileXTInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export default function ProfileXTPage() {
  return (
    <>
        <SecondaryHero title="Profile XT kompetenciamérés" image={'/szolgaltatasok/profile-xt.webp'}/>
        <ProfileXTInner />
    </>
    
  )
}
