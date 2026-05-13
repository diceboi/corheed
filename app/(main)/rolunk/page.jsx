import RolunkInner from "@/app/Components/Rolunk/RolunkInner"
import SecondaryHero from "@/app/Components/UI/SecondaryHero"

export default function RolunkPage() {
  return (
    <>
    <SecondaryHero title={'Csapatunk'} image={'/csapat.webp'} subtitle={'Rólunk'}/>
    <RolunkInner/>
    </>
  )
}
