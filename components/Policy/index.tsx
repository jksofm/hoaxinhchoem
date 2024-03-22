"use client";
import { inclusions } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/animation";
function Policy() {
  return (
    <div className="pt-[150px] px-[50px]">
      <ul className="flex lg:flex-row flex-col gap-4 justify-around">
        {inclusions.map((item, index) => (
          <motion.li
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center"
            key={item.title}
          >
            <Image
              src={item.icon}
              alt={item.description}
              width={36}
              height={36}
              className="mx-auto"
            />
            <h5 className="mt-2 mb-1">{item.title}</h5>
            <p>{item.description}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Policy;
