"use client";
import { getAllCategories } from "@/GraphQL/Queries";
import { Category as CategoryType } from "@/model/model";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/animation";
const Category = async () => {
  // const [categories, setCategories] = useState<CategoryType[]>([]);
  const data = await getAllCategories();
  const categories = data.categories;
  // useEffect(() => {
  //   getAllCategories().then((res: any) => {
  //     setCategories(res.categories);
  //   });
  // }, []);

  if (!categories) {
    return null;
  }

  return (
    <div>
      <ul className="lg:flex-row flex flex-col md:gap-6 lg:gap-0 gap-4 lg:justify-around min-h-[220px] pt-[40px] pb-[40px] md:pb-[40px] lg:pt-[0] lg:pb-[60px]">
        {categories.map((item: CategoryType, index) => {
          return (
            <motion.li
              key={item.id}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className={`text-primary-500 hover:opacity-80 ${
                index % 2 ? "lg:self-start" : "lg:self-end"
              } self-center lg:text-heading2-semibold text-heading4-medium underline`}
            >
              <Link href={`/${item.slug}`}>{item.name}</Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
