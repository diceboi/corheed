import { Poppins, Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import ContextProvider from "./Context";
import Nav from "./Components/UI/Nav";
import Footer from "./Components/UI/Footer";
import { Toaster } from "sonner";
import Script from 'next/script';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--inter",
});

export const metadata = {
  title: "Coreheed Consulting - Híd a generációk között",
  description: "Partner a generációk együttműködésében, a szemléletváltásban és az utódlásban. A többgenerációs csapatok szakmai támogatója.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {/*<GoogleTagManager gtmId="GTM-M8R4S2LK" />*/}
        <GoogleAnalytics gaId="G-SSJPHEBWHH" />
        <GoogleTagManager gtmId="GTM-T38LFVWM" />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '987747196943841');
            fbq('track', 'PageView');
          `}
        </Script>
          <body className={`${poppins.variable} ${inter.variable} ${GeistSans.variable} ${GeistMono.variable} text-poppins bg-[--white] text-black`}>
            <noscript>
              <img 
                height="1" 
                width="1" 
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=987747196943841&ev=PageView&noscript=1"
                alt=""
              />
            </noscript>
            <ContextProvider>
            <Nav />
              {children}
            <footer id="global-footer">
              <Footer />
            </footer>
            <Toaster position="bottom-center" richColors />
            </ContextProvider>
          </body>
        
    </html>
  );
}
