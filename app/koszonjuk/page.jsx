import H1 from '../Components/UI/Typo/H1'
import Paragraph from '../Components/UI/Typo/Paragraph'

export default function KoszonjukPage() {
  return (
    <section className='flex flex-col gap-8 items-center justify-center min-h-[90vh]'>
        <H1 classname={'text-center text-[--green]'}>Köszönjük a megkeresést,</H1>
        <Paragraph classname={'text-center'}>hamarosan felvesszük veled a kapcsolatot!</Paragraph>
    </section>
  )
}
