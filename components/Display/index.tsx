"use client";

import React from "react";
import ButtonShop from "../ButtonShop";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/animation";
function Display() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-4">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="relative overflow-hidden block"
      >
        <div
          //   style={{
          //     backgroundImage: `url(/img/boxflower.jpg)`,
          //     backgroundRepeat: "no-repeat",
          //     backgroundSize: "cover",
          //   }}
          className="w-full overflow-hidden shadow-xl hover:translate-y-[-0.25rem] transition-all duration-500 ease-in-out transform max-h-[850px]"
        >
          <img
            src="/img/boxflower.jpg"
            className="overflow-clip h-[400px] md:h-[800px] lg:h-[600px] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-heading1-semibold text-primary-500 my-2">
            Box Flower
          </h2>

          <ButtonShop link="/boxflower" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="relative overflow-hidden block"
      >
        <div
          //   style={{
          //     backgroundImage: `url(/img/boxflower.jpg)`,
          //     backgroundRepeat: "no-repeat",
          //     backgroundSize: "cover",
          //   }}
          className="w-full overflow-hidden shadow-xl hover:translate-y-[-0.25rem] transition-all duration-500 ease-in-out transform max-h-[800px]"
        >
          <img
            src="/img/bouquet.jpg"
            className="overflow-clip object-cover h-[400px] md:h-[800px] lg:h-[600px] w-full"
          />
        </div>
        <div>
          <h2 className="text-heading1-semibold text-primary-500 my-2">
            Bouquet
          </h2>

          <ButtonShop link="/bouquet" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.05)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="relative overflow-hidden block"
      >
        <div
          //   style={{
          //     backgroundImage: `url(/img/boxflower.jpg)`,
          //     backgroundRepeat: "no-repeat",
          //     backgroundSize: "cover",
          //   }}
          className="w-full overflow-hidden shadow-xl hover:translate-y-[-0.25rem] transition-all duration-500 ease-in-out transform lg:max-h-[800px]"
        >
          <img
            src="/img/birthdaybox.jpg"
            className="overflow-clip object-cover w-full h-[400px] md:h-[800px] lg:h-[600px]"
          />
        </div>
        <div>
          <h2 className="text-heading1-semibold text-primary-500 my-2">
            Birthday flower
          </h2>

          <ButtonShop link="/birthdaybox" />
        </div>
      </motion.div>
    </div>
  );
}

export default Display;
