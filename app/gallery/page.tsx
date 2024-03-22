"use client";
import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/animation";
import ModalImage from "react-modal-image";
const Gallery = () => {
  var items = [
    { id: 1, url: "/img/gallery/gallery(1).jpg", alt: "Image Gallery" },
    { id: 2, url: "/img/gallery/gallery(2).jpg", alt: "Image Gallery" },
    { id: 3, url: "/img/gallery/gallery(3).jpg", alt: "Image Gallery" },
    { id: 4, url: "/img/gallery/gallery(4).jpg", alt: "Image Gallery" },
    { id: 5, url: "/img/gallery/gallery(5).jpg", alt: "Image Gallery" },
    { id: 6, url: "/img/gallery/gallery(6).jpg", alt: "Image Gallery" },

    { id: 7, url: "/img/gallery/gallery(7).jpg", alt: "Image Gallery" },
    { id: 8, url: "/img/gallery/gallery(8).jpg", alt: "Image Gallery" },
    { id: 9, url: "/img/gallery/gallery(9).jpg", alt: "Image Gallery" },
    { id: 10, url: "/img/gallery/gallery(10).jpg", alt: "Image Gallery" },
    { id: 11, url: "/img/gallery/gallery(11).jpg", alt: "Image Gallery" },
    { id: 12, url: "/img/gallery/gallery(12).jpg", alt: "Image Gallery" },
    { id: 13, url: "/img/gallery/gallery(13).jpg", alt: "Image Gallery" },
    { id: 14, url: "/img/gallery/gallery(14).jpg", alt: "Image Gallery" },
    { id: 15, url: "/img/gallery/gallery(15).jpg", alt: "Image Gallery" },
    { id: 16, url: "/img/gallery/gallery(16).jpg", alt: "Image Gallery" },
    { id: 17, url: "/img/gallery/gallery(17).jpg", alt: "Image Gallery" },
    { id: 18, url: "/img/gallery/gallery(18).jpg", alt: "Image Gallery" },
    { id: 19, url: "/img/gallery/gallery(19).jpg", alt: "Image Gallery" },
    { id: 20, url: "/img/gallery/gallery(20).jpg", alt: "Image Gallery" },
    { id: 21, url: "/img/gallery/gallery(21).jpg", alt: "Image Gallery" },
    { id: 22, url: "/img/gallery/gallery(22).jpg", alt: "Image Gallery" },
    { id: 23, url: "/img/gallery/gallery(23).jpg", alt: "Image Gallery" },
    { id: 24, url: "/img/gallery/gallery(24).jpg", alt: "Image Gallery" },
    { id: 25, url: "/img/gallery/gallery(25).jpg", alt: "Image Gallery" },
    { id: 26, url: "/img/gallery/gallery(26).jpg", alt: "Image Gallery" },
    { id: 27, url: "/img/gallery/gallery(27).jpg", alt: "Image Gallery" },
    { id: 28, url: "/img/gallery/gallery(28).jpg", alt: "Image Gallery" },
    { id: 29, url: "/img/gallery/gallery(29).jpg", alt: "Image Gallery" },
    { id: 30, url: "/img/gallery/gallery(30).jpg", alt: "Image Gallery" },
    { id: 31, url: "/img/gallery/gallery(31).jpg", alt: "Image Gallery" },
    { id: 32, url: "/img/gallery/gallery(32).jpg", alt: "Image Gallery" },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map(function (item) {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            key={item.id}
          >
            <ModalImage small={item.url} large={item.url} alt={item.alt} />
            {/* <img src={item.url} alt={item.alt} /> */}
          </motion.div>
        );
      })}
    </Masonry>
  );
};

export default Gallery;
