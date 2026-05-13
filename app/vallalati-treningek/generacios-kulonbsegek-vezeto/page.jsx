import TrainingHero from "../../Components/UI/TrainingHero";
import GeneraciosKulonbsegekVezeto from "../../Components/Treningek/GeneraciosKulonbsegekVezeto";
import Breadcrumbs from "../../Components/UI/Breadcrumbs";

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
