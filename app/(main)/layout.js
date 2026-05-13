import Nav from "@/app/Components/UI/Nav";
import Footer from "@/app/Components/UI/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
