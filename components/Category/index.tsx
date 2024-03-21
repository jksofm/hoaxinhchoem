"use client";
import { getAllCategories } from "@/GraphQL/Queries";
import { Category as CategoryType } from "@/model/model";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    getAllCategories().then((res: any) => {
      setCategories(res.categories);
    });
  }, []);

  if (!categories) {
    return null;
  }
  return (
    <div>
      <ul className="lg:flex-row flex flex-col lg:gap-0 gap-4 lg:justify-around min-h-[220px] py-[60px]">
        {categories.map((item: CategoryType, index) => {
          return (
            <li
              className={`text-primary-500 hover:opacity-80 ${
                index % 2 ? "lg:self-start" : "lg:self-end"
              } self-center lg:text-heading2-semibold text-heading4-medium underline`}
            >
              <Link href={`/${item.slug}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
