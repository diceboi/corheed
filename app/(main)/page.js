import Image from "next/image";
import Hero from "@/app/Components/HomePage/Hero";
import Partner from "@/app/Components/HomePage/Partner";
import Hid from "@/app/Components/HomePage/Hid";
import Szolgaltatasok from "@/app/Components/HomePage/Szolgaltatasok";
import RolunkMondtak from "@/app/Components/HomePage/RolunkMondtak";
import Hiszunk from "@/app/Components/HomePage/Hiszunk";
import Megjelenesek from "@/app/Components/HomePage/Megjelenesek";

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
