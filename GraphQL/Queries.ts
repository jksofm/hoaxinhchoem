import { resType } from "@/app/[slug]/page";
import { Category, ProductDetail, ProductListItem } from "@/model/model";
import { GraphQLClient, request, gql } from "graphql-request";

const uri =
  `https://api-ap-northeast-1.hygraph.com/v2/cltxr6f2j04fn07uk22p1vj2u/master` ||
  process.env.NEXT_APP_API;

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTA4NTYxMDAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5oeWdyYXBoLmNvbS92Mi9jbHR4cjZmMmowNGZuMDd1azIycDF2ajJ1L21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LWFwLW5vcnRoZWFzdC0xLmh5Z3JhcGguY29tLyIsInN1YiI6IjM0MTBkMjRhLWMwMjQtNDNlNy1iYjQ4LWQ3YzU0YmYzY2Y3YiIsImp0aSI6ImNsdHlmanM1cDAxYXEwNzB5ZWR2cjc3cXQifQ.0k_9vlfvR0W5cyYBsQYly_yuVWbQBObzpcH88zIY1v6Xb1humvWx_5vYXR5EMk9efuHj3nwKSGn8eWKr4oddJEadg0hKzAHCgXAql7HqNVm9ukKBP54_QM1f2Xwfgp7GKfj8wSwH-8IsrONpShpwBl3YDUs6cFn4ivGDsi2ZVC1gW0uwJ2yHP7TK3AshqjKWk0lseb5waj_yJvywzWX1ouCXjSCnDb1XCiSGYeBWW2AvMbeOHOV9Sp8uylURSdf9es7HAu8ZKrgeU-f5dmVTpRYXACjWaPE8A9rJQIJjIGdbrgDla02V7Bt9UXBNQkcCkOficEW07Og__P42YIbVg3xfjuwcFZJEE5lBGZbQ6kmtKynaCs2gHDpWBocMNGEfAoXfy45qCVz0dZsS0A5UNEMWyAuPpE_dllKjzQYiCd6FNEIoq-dwqWBDy2iN6sEO8LlJZlwiGSO4k6JAQIulke7zoB3Y-mUG_lKhIhnaEX6lTpjnnc_e34xSle3MSqSHg6uAb-u8E98VPZsgKag2EUPR8O5URwEOtbWO3dtU8w_294rV8PyxzIwwkW9yfbdak1c-c1SbgANBhJw7U0iyUt_kYIIL_MO8wm5b0_a4V4ep95qWfCms7sRah3J4W6pYIT1DLRwoyUysb3o8Vsi3ZIs58eX6VkRlxkXnJ7h_9Fk" ||
  process.env.API_TOKEN;
export const graphcms = new GraphQLClient(uri, {
  method: `GET`,
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
  },
});

export const getAllCategories = async (): Promise<{
  categories: Category[];
}> => {
  const QUERY_SLUG_CATEGORIES = gql`
    query getCategories {
      categories {
        coverPhoto {
          url
        }
        id
        name
        slug
      }
    }
  `;
  const result: { categories: Category[] } = await graphcms.request(
    QUERY_SLUG_CATEGORIES
  );

  return result;
};
export const getProductfromCategory = async (id: string): Promise<resType> => {
  const PRODUCTS_QUERY = gql`
  query MyQuery {
    category(where: {id: "${id}"}) {
      name
      id
      slug
      coverPhoto{
        url
      }
      products {
        coverPhoto {
          url
        }
        description
        images {
          url
        }
        name
        price
        slug
        id
      }
    }
  }
  `;
  const result: resType = await graphcms.request(PRODUCTS_QUERY);

  return result;
};

export const getProductDetail = async (
  id: string
): Promise<{ product: ProductDetail }> => {
  const PRODUCT_QUERY = gql`
  query MyQuery {
    product(where: {id: "${id}"}) {
      coverPhoto {
        url
      }
      content {
        html
      }
      categories {
        name
        id
      }
      name
      price
      id
      description
      slug
      images {
        url
      }
      related {
        coverPhoto {
          url
        }
        description
        name
        price
        slug
        id
        images {
          url
        }
      }
    }
  }
  
    `;
  const result: { product: ProductDetail } = await graphcms.request(
    PRODUCT_QUERY
  );

  return result;
};
export const getAllProduct = async (): Promise<{
  products: ProductListItem[];
}> => {
  const PRODUCT_QUERY = gql`
    query MyQuery {
      products(last: 20) {
        coverPhoto {
          url
        }
        description
        images {
          url
        }
        name
        slug
        price
        id
      }
    }
  `;
  const result: { products: ProductListItem[] } = await graphcms.request(
    PRODUCT_QUERY
  );

  return result;
};
