import RolunkInner from "../Components/Rolunk/RolunkInner"
import SecondaryHero from "../Components/UI/SecondaryHero"

export default function RolunkPage() {
  return (
    <>
    <SecondaryHero title={'Csapatunk'} image={'/csapat.webp'} subtitle={'Rólunk'}/>
    <RolunkInner/>
    </>
  )
}
