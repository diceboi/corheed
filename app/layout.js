import { Poppins } from "next/font/google";
import './globals.css';
import Footer from "./Components/UI/Footer";
import ContextProvider from "./Context";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import Nav from "./Components/UI/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata = {
  title: "Coreheed",
  description: "Coreheed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {/*<GoogleTagManager gtmId="GTM-M8R4S2LK" />*/}
        {/*<GoogleAnalytics gaId="G-PWVPSEM48X" />*/}
          <body className={`${poppins.variable} text-poppins bg-[--white] text-black`}>
            <ContextProvider>
            <Nav />
              {children}
            <Footer />
            </ContextProvider>
          </body>
        
    </html>
  );
}
