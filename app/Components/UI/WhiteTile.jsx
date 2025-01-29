import Image from 'next/image'
import H3 from './Typo/H3'

export default function WhiteTile({ image, text }) {
  return (
    <div className='flex flex-col items-center justify-between gap-8 bg-[--white] p-8 rounded-3xl shadow-xl w-90'>
        <Image src={image} width={500} height={500} alt='Partner a generációk együttműködésében' className='lg:w-40 w-32 h-auto'/>
        <H3 classname={'text-center'}>{text}</H3>
    </div>
  )
}
