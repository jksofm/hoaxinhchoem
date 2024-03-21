import { ProductListItem } from "@/model/model";
import Link from "next/link";
import React, { useRef } from "react";

const ProductCard = ({ item }: { item: ProductListItem }) => {
  const refCard = useRef<HTMLElement>(null);
  const { coverPhoto, description, id, images, name, slug, price } = item;
  const handleMouseEnter = () => {
    const ref = (refCard.current as HTMLElement).style;
    ref.backgroundImage = `url(${images[1] ? images[1].url : images[0].url})`;
  };
  const handleMouseOut = () => {
    const ref = (refCard.current as HTMLElement).style;
    ref.backgroundImage = `url(${coverPhoto.url})`;
  };
  return (
    <Link
      onMouseOut={handleMouseOut}
      onMouseEnter={handleMouseEnter}
      href={`/products/${id}`}
      className=""
    >
      <div
        style={{
          backgroundImage: `url(${coverPhoto.url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        ref={refCard as any}
        className="min-h-[500px] md:h-[700px] lg:min-h-[1000px] transition-all"
      ></div>
      <div className="mt-2 text-center">
        <p className="">{name}</p>
        <div className="flex justify-center gap-1 items-center">
          <p className="text-heading4-medium">{price}</p>
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
      </div>
    </Link>
  );
};
export default ProductCard;
