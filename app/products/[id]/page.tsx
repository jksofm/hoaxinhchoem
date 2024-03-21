import { getProductDetail } from "@/GraphQL/Queries";
import ButtonContact from "@/components/ButtonContact";
import ProductCard from "@/components/ProductCard";
import { ProductDetail, ProductListItem } from "@/model/model";
import { mergeOpenGraph } from "@/utils/mergeOpenGraph";
import { Metadata, ResolvingMetadata } from "next";
// import React, { useEffect, useState } from "react";

export const revalidate = 3600;
async function ProductItem({ params }: { params: { id: string } }) {
  // const [productDetail, setProductDetail] = useState<ProductDetail | null>(
  //   null
  // );
  const data = await getProductDetail(params.id);
  const productDetail = (data as any).product;

  // useEffect(() => {
  //   getProductDetail(params.id).then((res: any) => {
  //     console.log(res.product);
  //     setProductDetail(res.product);
  //   });
  // }, []);
  if (productDetail) {
    return (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10">
          <div>
            <img src={productDetail.coverPhoto.url} className="w-full" />
          </div>
          <div className="">
            <h2 className="text-heading2-semibold mb-4">
              {productDetail.name}
            </h2>
            <div className="w-full h-[2px] bg-[#b08759]"></div>
            <div className="flex justify-center gap-1 items-center my-4">
              <p className="text-heading4-medium">{productDetail.price}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                width={20}
                fill="#b28959"
                viewBox="0 0 576 512"
              >
                <path d="M180.5 141.5C219.7 108.5 272.6 80 336 80s116.3 28.5 155.5 61.5c39.1 33 66.9 72.4 81 99.8c4.7 9.2 4.7 20.1 0 29.3c-14.1 27.4-41.9 66.8-81 99.8C452.3 403.5 399.4 432 336 432s-116.3-28.5-155.5-61.5c-16.2-13.7-30.5-28.5-42.7-43.1L48.1 379.6c-12.5 7.3-28.4 5.3-38.7-4.9S-3 348.7 4.2 336.1L50 256 4.2 175.9c-7.2-12.6-5-28.4 5.3-38.6s26.1-12.2 38.7-4.9l89.7 52.3c12.2-14.6 26.5-29.4 42.7-43.1zM448 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
              </svg>
            </div>
            <div className="w-full h-[2px] bg-[#b08759]"></div>

            <p className="text-[#a7a9aa] mt-4 mb-2">Product Detail</p>
            <p className="mb-4">{productDetail.description}</p>
            <ButtonContact link="https://zalo.me/0335847097" />
          </div>
        </div>
        <div
          //   contentEditable="true"
          dangerouslySetInnerHTML={{ __html: productDetail.content.html }}
          className="xl:px-[200px] px-[30px] py-[30px] xl:py-[200px] mt-8 bg-slate-300 text-primary-500 font-bold"
        ></div>

        <div className="px-[50px] flex flex-col gap-4 mt-8">
          {productDetail.images.map((item: { url: string }) => {
            return <img src={item.url} className="w-full" />;
          })}
        </div>
        <div className="px-8 py-[50px]">
          <h2 className="text-heading1-semibold text-slate-500 mt-8">
            RELATED PRODUCTS
          </h2>
          {productDetail.related.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 mt-6">
              {productDetail.related.map((item: ProductListItem) => {
                return <ProductCard item={item} />;
              })}
            </div>
          )}
        </div>
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
  // read route params
  const id = params.id;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
  const data = await getProductDetail(params.id);
  const productDetail = data.product;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: productDetail.name,
    metadataBase: new URL(
      `https://hoaxinhchoem.io.vn/products/${productDetail.id}`
    ),
    openGraph: {
      images: [productDetail.coverPhoto.url, ...previousImages],
      type: "website",
      siteName: "Hoaxinhchoem",
      title: productDetail.name,
      description: productDetail.description,
    },
  };
}

export default ProductItem;
