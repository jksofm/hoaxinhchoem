"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import classes from "./index.module.scss";
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
export const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    <motion.div className={classes.banner} variants={banner}>
      <BannerRowTop title={"Hello!"} />
      <BannerRowCenter title={"Have a nice day"} playMarquee={playMarquee} />
      <BannerRowBottom title={"Welcome"} />
    </motion.div>
  );
};

const AnimatedLetters = ({
  title,
  disabled,
}: {
  title: string;
  disabled?: boolean;
}) => (
  <motion.span
    className={classes.rowtitle}
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        key={index}
        className={classes.rowletter}
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }: { title: string }) => {
  return (
    <div className={classes.bannerrow}>
      <div className={classes.rowcol}>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className={classes.rowcol}
      >
        <span className={classes.rowmessage}>
          Bloom with grace and beauty, let the fragrance of flowers fill your
          heart with joy.
        </span>
      </motion.div>
    </div>
  );
};
const BannerRowBottom = ({ title }: { title: string }) => {
  return (
    <div className={`${classes.bannerrow} ${classes.center}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className={classes.scroll}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({
  title,
  playMarquee,
}: {
  title: string;
  playMarquee: boolean;
}) => {
  return (
    <div
      className={`${classes.bannerrow} ${classes.marquee} ${
        playMarquee && classes.animate
      }`}
    >
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className={classes.marquee__inner}
      >
        <AnimatedLetters title={title} disabled />

        <AnimatedLetters title={title} />

        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};
