import React from "react";
import { motion } from "framer-motion";
import classes from "./index.module.scss";
// Import images
const Image = ({
  src,
  fallback = "/img/aboutus.jpg",
  type = "image/webp",
  alt,
}: {
  src: string;
  fallback?: string;
  type?: string;
  alt: string;
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={src} alt={alt} />
    </picture>
  );
};
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
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
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

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
    y: 400,
    z: 300,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Loader = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div className={classes.loader}>
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className={classes.loaderinner}
      >
        <motion.div variants={itemMain} className={classes.transitionimage}>
          <motion.img layoutId="underline" src={"/img/herobg.jpg"} />
        </motion.div>
        <ImageBlock variants={item} id="image3" url="/img/gallery/hero3.jpg" />
        <ImageBlock variants={item} id="image4" url="/img/gallery/hero4.jpg" />
        <ImageBlock variants={item} id="image5" url="/img/gallery/hero5.jpg" />
        <ImageBlock variants={item} id="image1" url="/img/gallery/hero1.jpg" />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({
  posX,
  posY,
  variants,
  id,
  url,
}: {
  posX?: string;
  posY?: string;
  variants: any;
  id: string;
  url: string;
}) => {
  let tag;
  if (id === "image1") {
    tag = classes.image1;
  }
  if (id === "image3") {
    tag = classes.image3;
  }
  if (id === "image4") {
    tag = classes.image4;
  }
  if (id === "image5") {
    tag = classes.image5;
  }

  return (
    <motion.div
      variants={variants}
      className={`${classes.imageblock} ${tag}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image src={url} alt={id} />
    </motion.div>
  );
};
export default Loader;
