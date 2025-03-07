import React from 'react'
import CsapatTile from './CsapatTile'

export default function Csapat() {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-4'>
        <CsapatTile title={'Mézes-Lendvai Dorottya'} post={'Szakmai vezető'} image={'/csapat/mezes-lendvai-dorottya.webp'} info={'mezes-lendvai-dorottya'}/>
        <CsapatTile title={'Mézes Áron'} post={'Ügyvezető'} image={'/csapat/mezes-aron.webp'} info={'mezes-aron'}/>
        <CsapatTile title={'Mézes Hanga'} post={'Talent management ExpertZ'} image={'/csapat/mezes-hanga.webp'} info={'mezes-hanga'}/>
        <CsapatTile title={'Dömötör Katalin'} post={'HR tanácsadó, coach, tréner'} image={'/csapat/domotor-katalin.webp'} info={'domotor-katalin'}/>
        <CsapatTile title={'Dr. Király Zsolt'} post={'Humánfejlesztő, HR tanácsadó'} image={'/csapat/dr-kiraly-zsolt.webp'} info={'dr-kiraly-zsolt'}/>
        <CsapatTile title={'Seres Nikolett'} post={'Kommunikációs tanácsadó, Employer branding és élményszakértő'} image={'/csapat/seres-nikolett.webp'} info={'seres-nikolett'}/>
        <CsapatTile title={'Belayane Najoua'} post={'PR, Kommunikáció ExpertZ'} image={'/csapat/belayane-najoua.webp'} info={'belayane-najoua'}/>
        <CsapatTile title={'Pájer Kata'} post={'Recruitment ExpertZ'} image={'/csapat/pajer-kata.webp'} info={'pajer-kata'}/>
        <CsapatTile title={'Tóth Kinga'} post={'Ifjúsági- és gyermek coach'} image={'/csapat/toth-kinga.webp'} info={'toth-kinga'}/>
    </div>
  )
}
