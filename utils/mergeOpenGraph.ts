import type { Metadata } from "next";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  siteName: "Hoaxinhchoem",
  title: "Hoaxinchoem, Your sentiment Our petal",
  description:
    "Welcome to our charming flower shop, where beauty blooms all around. ",
  images: [
    {
      url: "https://ap-northeast-1.graphassets.com/cltxr6gxv01w907zpdlkvh6ba/clu0pahfybo7z071byuzgkjh0?_gl=1*iu1czh*_ga*Nzk0NjQxNDU5LjE3MTA4MzA4OTc.*_ga_G6FYGSYGZ4*MTcxMDk5MzQwMi4xMy4xLjE3MTA5OTM0MzcuMjUuMC4w",
    },
  ],
};

export const mergeOpenGraph = (
  og?: Metadata["openGraph"]
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: defaultOpenGraph.images,
  };
};
