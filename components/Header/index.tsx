"use client";
import { mergeOpenGraph } from "@/utils/mergeOpenGraph";
import { Metadata } from "next";
import { Roboto, Arima, Scope_One } from "next/font/google";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
const arima = Arima({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const refHeader = useRef<HTMLElement>(null);
  const refNav = useRef<HTMLElement>(null);
  const onScroll = useCallback(() => {
    const { scrollY } = window;
    const ref = (refHeader.current as HTMLElement).style;
    const refN = (refNav.current as HTMLElement).style;

    // console.log(typeof scrollY);
    if (scrollY > 20) {
      //   console.log("scrollY", scrollY);

      ref.background = "transparent";
      ref.position = "fixed";
    } else {
      ref.background = "white";
      ref.position = "relative";
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleNav = () => {
    const ref = (refNav.current as HTMLElement).style;
    if (ref.display !== "block") {
      ref.display = "block";
      (refHeader.current as HTMLElement).style.background = "white";
    } else {
      ref.display = "none";
      (refHeader.current as HTMLElement).style.background = "transparent";
    }

    // if (ref.display === "block") {
    //   ref.display = "none";
    //   (refHeader.current as HTMLElement).style.background = "transparent";
    // }
  };
  return (
    <div
      ref={refHeader as any}
      className="flex items-center p-3 relative top-0 left-0 bg-white w-full z-[100]"
    >
      <div className="absolute w-full bg-[#b08759] top-0 left-0 h-[5px]"></div>
      <div
        ref={refNav as any}
        className="absolute hidden md:top-[70px] top-[60px] lg:top-[85px] left-0 min-h-screen w-full bg-[rgba(251,255,254,0.84)] z-[99999]"
      >
        <h2
          onClick={handleNav}
          className="mt-4 pl-4 text-heading3-bold text-primary-500"
        >
          <Link href="/">Home</Link>
        </h2>
        <h2
          onClick={handleNav}
          className="mt-4 pl-4 text-heading3-bold text-primary-500"
        >
          <Link href="/aboutus">About us</Link>
        </h2>
        <h2 className="pl-4 mt-4 text-heading3-bold text-primary-500">
          Flower
        </h2>

        <ul className="pl-8 text-primary-500">
          <li onClick={handleNav} className="mt-3 mb-3">
            <Link href="/all">All</Link>
          </li>
          <li onClick={handleNav} className="mb-3">
            <Link href="/boxflower">Box Flower</Link>
          </li>
          <li onClick={handleNav} className="mb-3">
            <Link href="/birthdaybox">Birthday Flower</Link>
          </li>
          <li onClick={handleNav} className="mb-3">
            <Link href="/bouquet">Bouquet</Link>
          </li>
          <li onClick={handleNav} className="mb-3">
            <Link href="/favorite">Favorite</Link>
          </li>
        </ul>
        <h2
          onClick={handleNav}
          className="pl-4 mt-4 text-heading3-bold text-primary-500"
        >
          <Link href="/gallery">Gallery</Link>
        </h2>
        <h2
          onClick={handleNav}
          className="pl-4 mt-4 text-heading3-bold text-primary-500"
        >
          <Link href="/contact">Contact</Link>
        </h2>
      </div>
      <div
        onClick={handleNav}
        className="cursor-pointer flex items-center gap-2"
      >
        <h2 className="text-primary-500 font-[700] lg:text-[24px] md:text-[18px] text-[18px]">
          SHOP
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={14}
          viewBox="0 0 512 512"
          fill="#b08759"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>

      <div className={`${arima.className} m-auto translate-x-[-8%]`}>
        <Link href={"/"}>
          <h2 className="lg:text-[42px] md:text-[36px] text-[20px] font-[900] text-primary-500">
            Hoaxinhchoem
          </h2>
        </Link>
      </div>
    </div>
  );
};
export const metadata: Metadata = {
  metadataBase: new URL("https://hoaxinhchoem.io.vn/gallery"),
  openGraph: mergeOpenGraph(),
};

export default Header;
