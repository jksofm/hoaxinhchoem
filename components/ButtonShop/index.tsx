import Link from "next/link";
import React from "react";

function ButtonShop({ link }: { link: string }) {
  return (
    <button className="lg:px-8 lg:py-2 py-1 px-6 text-[14px] lg:text-[16px] text-primary-500 border border-solid border-[#cc9659] bg-white hover:bg-[#cc9659] hover:border-white hover:text-white rounded-sm">
      <Link href={link}>SHOP</Link>
    </button>
  );
}

export default ButtonShop;
