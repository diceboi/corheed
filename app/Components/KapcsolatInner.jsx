"use client";

import { useState, useEffect } from "react";
import H1 from "./UI/Typo/H1";
import H2 from "./UI/Typo/H2";
import H3 from "./UI/Typo/H3";
import Image from "next/image";
import Link from "next/link";
import MainNavButton from "./UI/Buttons/MainNavButton";
import mailformSchema from "../utils/email-validation/mail-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { motion } from "framer-motion";
import Paragraph from "./UI/Typo/Paragraph";

import { useForm } from "react-hook-form";

export default function KapcsolatInner({ sendMail }) {

  const [productName, setProductName] = useState("");

  const { 
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }, // Destructure the formState object to get the errors and isSubmitting properties
  } = useForm({
    defaultValues: {
      product: "",
    },
    resolver: zodResolver(mailformSchema),
  });

  const onSubmit = async (formData) => {
    console.log(formData);
    const result = await sendMail(formData);
    if (result.success) {
      toast.success("Az üzenetet sikeresen elküldtük!");
      reset();
    } else {  
      toast.error("Hiba történt az üzenet küldése során. Kérjük próbálja újra!");
    }
  };

  return (
    <section className="relative w-full m-auto px-4 pb-20 lg:pt-96 pt-60 overflow-hidden">
        <Image src="/kapcsolathero1.webp" fill alt="Kapcsolat kép" style={{ objectFit: 'contain', objectPosition: 'top' }} className="lg:block hidden"/>
        <Image src="/kapcsolathero1.webp" fill alt="Kapcsolat kép" style={{ objectFit: 'contain', objectPosition: '50% 8%' }} className="lg:hidden block"/>
        <div className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 left-1/3 top-2/3 bg-[--yellow] rounded-full blur-3xl z-10 opacity-25"></div>
        <div className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 left-2/3 top-1/3 bg-[--mint] rounded-full blur-3xl z-10 opacity-10"></div>
      <div className="container m-auto relative z-10">
        <div className="flex flex-col gap-8 py-8 lg:px-8 px-4 lg:w-1/2 m-auto bg-[--green] shadow-md rounded-3xl">
          <div className="flex lg:flex-row flex-col justify-center gap-8 items-baseline z-10">
            <H2 classname={"text-[--white] text-center lg:self-start self-center"}>Írj nekünk</H2>
          </div>
          <div className="flex flex-col gap-8">
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Név"
                name="name"
                className="bg-white rounded-full shadow-md px-4 py-2"
                {...register("name")}
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              <input
                type="phone"
                placeholder="Telefonszám"
                name="phone"
                className="bg-white rounded-full shadow-md px-4 py-2"
                {...register("phone")}
              />
              {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
              <input
                type="email"
                placeholder="E-mail cím"
                name="email"
                className="bg-white rounded-full shadow-md px-4 py-2"
                {...register("email")}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              <input
                type="text"
                placeholder="Tárgy"
                name="subject"
                className="bg-white rounded-full shadow-md px-4 py-2"
                {...register("subject")}
              />
              {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}
              <textarea
                type="text"
                placeholder="Üzenet"
                name="message"
                rows={10}
                className="bg-white rounded-3xl shadow-md px-4 py-2"
                {...register("message")}
              />
              {errors.message && <span className="text-red-500">{errors.message.message}</span>}

              <div className="flex flex-nowrap items-start gap-2 text-white">
                <input
                  type="checkbox"
                  name="acceptance"
                  id="acceptance"
                  required
                  className="p-4 text-lg bg-[--white] mt-1"
                />
                <label htmlFor="acceptance">
                  Elolvastam, megértettem, és elfogadom az{" "}
                  <Link className="underline " href='/adatkezelesi-tajekoztato'>adatkezelési tájékoztatóban </Link>
                  foglaltakat.*
                </label>
              </div>
              
              <MainNavButton type={"submit"} classname={"self-center"} text={isSubmitting ? "Küldés..." : "Küldés"}>
                {isSubmitting ? "Küldés..." : "Küldés"}
              </MainNavButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
