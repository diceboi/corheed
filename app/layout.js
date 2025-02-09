import { Poppins, Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Footer from "./Components/UI/Footer";
import ContextProvider from "./Context";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import Nav from "./Components/UI/Nav";
import { Toaster } from "sonner";

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
        {/*<GoogleAnalytics gaId="G-PWVPSEM48X" />*/}
          <body className={`${poppins.variable} ${inter.variable} ${GeistSans.variable} ${GeistMono.variable} text-poppins bg-[--white] text-black`}>
            <ContextProvider>
            <Nav />
              {children}
            <Footer />
            <Toaster position="bottom-center" richColors />
            </ContextProvider>
          </body>
        
    </html>
  );
}
