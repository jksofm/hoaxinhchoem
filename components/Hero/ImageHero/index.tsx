import React from "react";
import { motion } from "framer-motion";
import classes from "./index.module.scss";
function ImageHero() {
  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, -0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: +200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };
  return (
    <div className={`${classes.transitionimage} ${classes.final}`}>
      <motion.img
        variants={itemMain}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.9],
          duration: 0.8,
        }}
        src={`/img/herobg.jpg`}
        layoutId="underline"
      />
    </div>
  );
}

export default ImageHero;
