import { getAllProduct, getProductfromCategory } from "@/GraphQL/Queries";
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
async function Page() {
  // const [productList, setProductList] = useState<ProductListItem[]>([]);

  const data = await getAllProduct();
  const productList = data.products;
  if (productList.length > 0) {
    return (
      <div className="px-8 py-[50px]">
        <h2 className="text-heading4-medium text-slate-950">All Products</h2>
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
}
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title:
      "Check Out Our Beautiful Selection of Fresh Flowers | Flower Shop Product List",
    metadataBase: new URL(`https://hoaxinhchoem.io.vn/all`),
    openGraph: {
      images: [
        {
          url: "https://ap-northeast-1.graphassets.com/cltxr6gxv01w907zpdlkvh6ba/clu0pahfybo7z071byuzgkjh0?_gl=1*iu1czh*_ga*Nzk0NjQxNDU5LjE3MTA4MzA4OTc.*_ga_G6FYGSYGZ4*MTcxMDk5MzQwMi4xMy4xLjE3MTA5OTM0MzcuMjUuMC4w",
        },
      ],
      type: "website",
      siteName: "Hoaxinhchoem",
      title:
        "Check Out Our Beautiful Selection of Fresh Flowers | Flower Shop Product List",
      description:
        " Explore our wide range of fresh flowers perfect for any occasion. From vibrant roses to elegant lilies, we have something for everyone. Visit our product list page to browse and order your favorite blooms today! ",
    },
  };
}

export default Page;
