import Image from "next/image";
import Hero from "./Components/HomePage/Hero";
import Partner from "./Components/HomePage/Partner";
import Hid from "./Components/HomePage/Hid";
import Szolgaltatasok from "./Components/HomePage/Szolgaltatasok";
import RolunkMondtak from "./Components/HomePage/RolunkMondtak";
import Hiszunk from "./Components/HomePage/Hiszunk";
import Megjelenesek from "./Components/HomePage/Megjelenesek";

export default function Home() {
  return (
    <>
      <Hero />
      <Partner />
      <Hid />
      <Szolgaltatasok />
      <RolunkMondtak />
      <Megjelenesek />
    </>
  );
}
