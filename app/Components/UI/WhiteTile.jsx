import Image from 'next/image'
import H3 from './Typo/H3'

export default function WhiteTile({ image, text }) {
  return (
    <div className='flex flex-col items-center justify-between gap-8 bg-[--white] p-6 rounded-3xl shadow-xl w-90'>
      <Image src={image} width={350} height={350} alt='Partner a generációk együttműködésében' className='lg:w-32 w-24 h-auto' />
      <H3 classname={'text-center'}>{text}</H3>
    </div>
  )
}
