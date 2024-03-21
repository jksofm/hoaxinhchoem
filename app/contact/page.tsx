import Link from "next/link";
import * as React from "react";

export default function Contact() {
  return (
    <div className="grid grid-cols-12 p-[200px]">
      <div className="col-span-4">
        <div className="mb-8">
          <h2 className="text-heading3-bold">OUR STORE</h2>
          <p className="text-[14px]">
            Hoang Quoc Viet St. , Phu Thuan, District 7, Ho Chi Minh City
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-heading3-bold">HOURS</h2>
          <p className="text-[14px]">MON-FRI 8:00-19:00</p>
          <p className="text-[14px]">SAT-SUN 8:00-17:00</p>
        </div>
        <div className="mb-8 flex flex-col">
          <h2 className="text-heading3-bold">SOCIALS</h2>
          <Link
            className="text-[14px]"
            href="https://www.instagram.com/hoaxinhchoem/"
          >
            Instagram
          </Link>
          <Link
            className="text-[14px]"
            href="https://www.tiktok.com/@hoaxinhchoem"
          >
            Titok
          </Link>
        </div>
      </div>
      <div className="col-span-8 text-right">
        <h2 className="text-[64px] text-[#403a2c]">SEND US</h2>
        <p className="text-[140px] text-[#b3acac] relative">
          <em>MESSAGE</em>
          {/* <div className="absolute w-[600px] h-[500px] tran bottom-3 right-3 rounded-full border border-[#403a2c] rotateX"></div> */}
        </p>
      </div>
    </div>
  );
}
