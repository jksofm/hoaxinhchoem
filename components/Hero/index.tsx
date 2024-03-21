import React from "react";

function Hero() {
  return (
    <section className="px-2 md:px-4">
      <div
        style={{
          backgroundImage: `url(/img/gif.gif)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="lg:min-h-[800px] min-h-[600px] flex flex-col items-center justify-end"
      >
        <h2 className="text-center text-heading1-bold text-[#f3dac2] mb-[40%] lg:mb-[20%]">
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
