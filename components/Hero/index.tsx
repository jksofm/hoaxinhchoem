"use client";
import {
  AnimatePresence,
  AnimateSharedLayout,
  LayoutGroup,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Banner } from "./Banner";
import ImageHero from "./ImageHero";
import Loader from "./loader";

function Hero() {
  const [loading, setLoading] = useState<boolean>(true);
  const refContainer = useRef(null);
  // useEffect(() => {
  //   loading
  //     ? refContainer.current.style.overflow= 'hidden'
  //     : refContainer.current.style.overflow= 'hidden'
  // }, [loading]);

  return (
    <section ref={refContainer} className="">
      <div className="sm:block hidden">
        <LayoutGroup>
          <AnimatePresence>
            {loading ? (
              <motion.div className="h-[100vh]" key="loader">
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <div className="relative">
                {/* <motion.div key="loader">
                  <Loader setLoading={setLoading} />
                </motion.div> */}
                <Banner />
                {!loading && <ImageHero />}
              </div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>

      {/* <div className="lg:min-h-[600px] px-0 lg:px-4 min-h-[150px] lg:pt-[40px] lg:pb-[40px] md:pt-[20px] md:pb-[20px] hero-container">
        <div className="title md:text-[36px] lg:text-[52px] xl:text-[78px]">
          <div className="title-inner">
            <div className="cafe">
              <div className="cafe-inner">"Blooming with beauty,</div>
            </div>
            <div className="mozart">
              <div className="mozart-inner">blossoming with love."</div>
            </div>
          </div>
        </div>

        <div className="image">
          <img src={`/img/herobg.jpg`} alt="" />
        </div>
      </div> */}
      <div
        style={{
          backgroundImage: `url(/img/herobg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="sm:hidden lg:min-h-[800px] min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-end"
      >
        <h2 className="text-center text-heading2-bold  lg:text-heading1-bold text-[#f3dac2] mb-[40%] md:mb-[30%] lg:mb-[20%]">
          "Blooming with beauty, blossoming with love."
        </h2>
        <h2 className="mb-8 text-center text-[14px] lg:text-heading4-medium text-white">
          Hoang Quoc Viet St., Ward Phu Thuan, District 7
        </h2>
      </div>
    </section>
  );
}

export default Hero;
