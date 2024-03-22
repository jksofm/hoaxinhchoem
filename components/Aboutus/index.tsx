"use-client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/animation";

function Aboutus() {
  return (
    <div className="flex min-h-[400px] md:min-h-[600px] lg:min-h-[800px] bg-slate-50 relative">
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          backgroundImage: `url(/img/category1.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full"
      ></motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          backgroundImage: `url(/img/category2.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full lg:block hidden"
      ></motion.div>
      <button className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:px-8 lg:py-3 py-2 px-6  text-[18px] lg:text-[24px] text-primary-500 border border-solid border-[#cc9659] bg-white hover:bg-[#cc9659] hover:border-white hover:text-white rounded-sm">
        <Link href={"/aboutus"}>About us</Link>
      </button>
    </div>
  );
}

export default Aboutus;
