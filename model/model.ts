export interface Category {
  coverPhoto: {
    url: string;
  };
  name: string;
  id: string;
  slug: string;
}
export interface ProductListItem {
  coverPhoto: {
    url: string;
  };
  description: string;
  images: {
    url: string;
  }[];
  name: string;
  id: string;
  slug: string;
  price: number;
}
export interface ProductDetail {
  coverPhoto: {
    url: string;
  };
  content: {
    html: string;
  };
  description: string;
  images: {
    url: string;
  }[];
  name: string;
  id: string;
  slug: string;
  price: number;
  categories: {
    name: string;
    id: string;
  }[];
  related: ProductListItem[];
}
