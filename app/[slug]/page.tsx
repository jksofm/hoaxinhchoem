import { getProductfromCategory } from "@/GraphQL/Queries";
import ProductCard from "@/components/ProductCard";
import { ProductListItem } from "@/model/model";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface resType {
  category: {
    id: string;
    name: string;
    coverPhoto: {
      url: string;
    };
    slug: string;
    products: ProductListItem[];
  };
}
export const revalidate = 3600;
async function Page({ params: { slug = "home" } }) {
  // const [productList, setProductList] = useState<ProductListItem[]>([]);
  let id: string = "";
  let title: string = "";
  if (slug === "bouquet") {
    id = "clty71cff41kl07zv65dzpzw7";
    title = "Bouquet";
  }
  if (slug === "boxflower") {
    id = "clty6zt2z41a107zvpyszg2iq";
    title = "Box Flower";
  }
  if (slug === "favorite") {
    id = "clty747d542na0714xigmi11v";
    title = "Favorite";
  }
  if (slug === "birthdaybox") {
    id = "clty72ha942hs0714whpekshm";
    title = "Birthday Box";
  }
  const data = await getProductfromCategory(id);
  const productList = data.category.products;
  // useEffect(() => {
  //   if (
  //     slug === "bouquet" ||
  //     slug === "boxflower" ||
  //     slug === "favorite" ||
  //     slug === "birthdaybox"
  //   ) {
  //     getProductfromCategory(id).then((res: any) => {
  //       setProductList(res.category.products);
  //     });
  //   }
  // }, [id]);
  if (
    slug !== "bouquet" &&
    slug !== "boxflower" &&
    slug !== "favorite" &&
    slug !== "birthdaybox"
  ) {
    return (
      <div className="pt-[200px] text-center">
        <h2 className="text-heading2-semibold text-primary-500">Not Found</h2>
        <p className="mt-4">Could not find requested resource</p>

        <Link href="/">
          <button className="lg:px-8 mt-4 lg:py-2 py-1 px-6 text-[14px] lg:text-[16px] text-primary-500 border border-solid border-[#cc9659] bg-white hover:bg-[#cc9659] hover:border-white hover:text-white rounded-sm">
            Return Home
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="px-8 py-[50px]">
      <h2 className="text-heading4-medium text-slate-950">{title}</h2>
      {productList.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 mt-6">
          {productList.map((item: ProductListItem) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
}
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
  const data = await getProductfromCategory(id);
  const category = data.category;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  // if (category) {
  return {
    title: category && category.name,
    metadataBase: new URL(
      `https://hoaxinhchoem.io.vn/${category && category.slug}`
    ),
    openGraph: {
      images: [category && category.coverPhoto.url, ...previousImages],
      type: "website",
      siteName: "Hoaxinhchoem",
      title: category && category.name,
      description:
        "Welcome to our flower shop page, where you will find a beautiful selection of hand-picked blooms for every occasion. ",
    },
  };
  // }
  // return {
  //   title: "hoaxinhchoem",
  //   metadataBase: new URL("https://hoaxinhchoem.io.vn"),
  //   openGraph: {
  //     type: "website",
  //     title: "hoaxinhchoem",
  //     description:
  //       "Welcome to our flower shop page, where you will find a beautiful selection of hand-picked blooms for every occasion. ",
  //   },
  // };
}

export default Page;
