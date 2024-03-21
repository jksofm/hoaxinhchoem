"use client";
import Image from "next/image";
import { getAllCategories } from "@/GraphQL/Queries";
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import Aboutus from "@/components/Aboutus";
import Email from "@/components/Email";
import Display from "@/components/Display";
import Policy from "@/components/Policy";
export default function Home() {
  useEffect(() => {
    getAllCategories().then((res) => console.log(res));
  }, []);

  return (
    <main className="min-h-[500px] w-full">
      <Hero />
      <Category />
      <Aboutus />
      <Email />
      <Display />
      <Policy />
    </main>
  );
}
