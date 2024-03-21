import React from "react";

function Aboutus() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(/img/aboutus.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="lg:px-[200px] xl:px-[300px] md:px-[100px] px-[20px] py-[100px]"
      >
        <div className="border-solid border-[4px] border-white p-[40px]">
          <p className="text-center mb-4 italic lg:text-heading3-bold md:text-heading4-medium text-white">
            Welcome to our floral paradise! We are a flower shop that has been
            always trying to serve all of you perfectly.
          </p>
          <p className="mb-4 text-center italic lg:text-heading3-bold md:text-heading4-medium text-white">
            At our shop, we believe in the power of flowers to brighten
            someone's day, celebrate special occasions, and bring beauty into
            any space.Our team of skilled florists is dedicated to creating
            stunning arrangements that exceed our customers' expectations.
          </p>
          <p className="mb-4 text-center italic lg:text-heading3-bold md:text-heading4-medium text-white">
            We source our flowers from trusted local growers and suppliers to
            ensure that our blooms are always fresh and of the highest quality.
            From classic roses to exotic orchids, our selection of flowers is
            diverse and ever-changing to reflect the seasons.
          </p>
          <p className="mb-4 text-center italic lg:text-heading3-bold md:text-heading4-medium text-white">
            Whether you are looking for a romantic bouquet for a loved one, a
            cheerful centerpiece for a party, or sympathy flowers to express
            your condolences, we are here to help. Our friendly staff is always
            happy to offer guidance and advice on choosing the perfect
            arrangement for any occasion.
          </p>
          <p className="text-center italic lg:text-heading3-bold md:text-heading4-medium text-white">
            Thank you for visiting our shop. We look forward to bringing a touch
            of floral magic into your life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
