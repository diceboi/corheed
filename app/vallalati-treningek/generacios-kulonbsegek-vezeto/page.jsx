import TrainingHero from "@/app/Components/UI/TrainingHero";
import GeneraciosKulonbsegekVezeto from "@/app/Components/Treningek/GeneraciosKulonbsegekVezeto";
import Breadcrumbs from "@/app/Components/UI/Breadcrumbs";

export default function GeneraciosKulonbsegekVezetoPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Vállalati tréningek', href: '/vallalati-treningek' },
          { label: 'Generációs különbségek – vezetői fókusz' }
        ]}
      />
      <TrainingHero 
        title="Generációs különbségek – vezetői fókusz" 
        image={'/szolgaltatasok/generacios.webp'}
      />
      <GeneraciosKulonbsegekVezeto />
    </>
  );
}
