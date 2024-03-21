import { inclusions } from "@/constants";
import Image from "next/image";
import React from "react";

function Policy() {
  return (
    <div className="pt-[150px] px-[50px]">
      <ul className="flex lg:flex-row flex-col gap-4 justify-around">
        {inclusions.map((item, index) => (
          <li className="text-center" key={item.title}>
            <Image
              src={item.icon}
              alt={item.description}
              width={36}
              height={36}
              className="mx-auto"
            />
            <h5 className="mt-2 mb-1">{item.title}</h5>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Policy;
