import KapcsolatHero from '../Components/UI/KapcsolatHero'
import KapcsolatInner from '../Components/KapcsolatInner';
import nodemailer from "nodemailer"
import { getErrorMessages } from '../utils/errors';

export default function KapcsolatPage() {

  const sendMail = async (formData) => {
    'use server';

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        }
      });

      const mailOptions = {
        from: formData.email,
        to: 'szasz.szabolcs1995@gmail.com',
        subject: `Új üzenet a weboldalról ${formData.name} részéről`,
        text: `Név: ${formData.name}\nEmail: ${formData.email}\nTelefonszám: ${formData.phone}\nTárgy: ${formData.subject}\n\nÜzenet: ${formData.message}`,
        html: '',
      }

      await transporter.sendMail(mailOptions);
      return {
        success: true,
        error: null,
      }
    } catch (error) {
      return {
        success: false,
        error: getErrorMessages(error), // Return the error message
      };
    }
  }

  return (
    <>
    {/*<KapcsolatHero title={"Vedd fel velünk a kapcsolatot"} image={'/kapcsolathero.webp'}/>*/}
    <KapcsolatInner sendMail={sendMail}/>
    </>
  )
}
