import React from "react";
import ButtonShop from "../ButtonShop";

function Display() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-4">
      <div className="relative overflow-hidden block">
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
            className="overflow-clip over h-[800px] lg:h-[600px] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-heading1-semibold text-primary-500 my-2">
            Box Flower
          </h2>

          <ButtonShop link="/boxflower" />
        </div>
      </div>
      <div className="relative overflow-hidden block">
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
            className="overflow-clip object-cover h-[800px] lg:h-[600px] w-full"
          />
        </div>
        <div>
          <h2 className="text-heading1-semibold text-primary-500 my-2">
            Bouquet
          </h2>

          <ButtonShop link="/bouquet" />
        </div>
      </div>
      <div className="relative overflow-hidden block">
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
            className="overflow-clip object-cover w-full h-[800px] lg:h-[600px]"
          />
        </div>
        <div>
          <h2 className="text-heading1-semibold text-primary-500 my-2">
            Birthday flower
          </h2>

          <ButtonShop link="/birthdaybox" />
        </div>
      </div>
    </div>
  );
}

export default Display;
