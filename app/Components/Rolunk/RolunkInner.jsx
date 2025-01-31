import React from 'react'
import RegularContainer from '../UI/RegularContainer'
import Paragraph from '../UI/Typo/Paragraph'
import Csapat from '../UI/Csapat'

export default function RolunkInner() {
  return (
    <RegularContainer classname={'lg:py-20 py-8 bg-white'}>
        <div className='flex flex-col lg:gap-16 gap-8 px-4'>
            <div className='flex lg:flex-row flex-col lg:gap-16 gap-8 py-8'>
                <Paragraph classname={'lg:w-1/2 w-full'}>
                A Coreheednél a szakmai csapatunk összetételében is képviseljük és ötvözzük a mottónkban megjelenő értékeket, amiket a munkánkban is fontosnak tartunk:
                </Paragraph>
                
                <div className='flex flex-col gap-4 lg:w-1/2 w-full lg:items-end'>
                    <Paragraph classname={'font-bold border-b-2 border-[--mint] w-fit bg-[--lightgreen] lg:text-left text-center px-2'}>A többgenerációs csapatműködést és tudásmegosztást</Paragraph>
                    <Paragraph classname={'font-bold border-b-2 border-[--mint] w-fit bg-[--lightgreen] lg:text-left text-center px-2'}>A családi vállalkozások folytonosságának támogatását</Paragraph>
                    <Paragraph classname={'font-bold border-b-2 border-[--mint] w-fit bg-[--lightgreen] lg:text-left text-center px-2'}>Illetve a szakmai hitelességet és megbízhatóságot</Paragraph>
                </div>
            </div>
            <Paragraph classname={''}>
                Csapatunk tagjai olyan jeles szakemberek, akik tapasztalatukkal és sikeres szakmai múltjukkal hiteles szereplői egy-egy területnek, és hosszú ideje nyújtanak szakmai támogatást többgenerációs csapatoknak. Lényegesnek tartjuk a generációk közötti kölcsönösséget, a közös tanulást és tudásmegosztást, mivel úgy véljük, hogy így sokkal gazdagabb és komplexebb ismeretanyaggal rendelkezhetünk. Éppen ezért a szakmai csapatunkban is képviseljük a generációs megoszlást, így az X és Y generáció tagjai mellett vannak Z generációs kollégáink is: ők az Expert Z-k. Az Expert Z csapat olyan tehetséges fiatalokból áll, akik fiatal koruk ellenére már évek óta kint vannak a munkaerőpiacon, és komoly szakmai tapasztalattal rendelkeznek egy-egy területen. Friss szemléletmódjukkal, innovatív megoldásaikkal új nézőpontot hoznak be a csapat működésébe és a szakmai munkájuk során is ezt képviselik.
                </Paragraph>     
            <Csapat />          
        </div>
    </RegularContainer>
  )
}
