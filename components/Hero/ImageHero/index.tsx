import React from "react";
import { motion } from "framer-motion";
import classes from "./index.module.scss";
function ImageHero() {
  return (
    <div className={`${classes.transitionimage} ${classes.final}`}>
      <motion.img
        transition={{
          ease: [0.6, 0.01, -0.05, 0.9],
          duration: 1.6,
        }}
        src={`/img/herobg.jpg`}
        layoutId="underline"
      />
    </div>
  );
}

export default ImageHero;
