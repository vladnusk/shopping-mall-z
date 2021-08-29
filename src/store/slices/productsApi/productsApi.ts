import { IProduct } from './../../../models/IProduct';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface IProducts {
//     productId: string;
//     name: string;
//     image: string;
// }

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://td988hk7hc.execute-api.us-west-1.amazonaws.com/dev",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], any>({
      query: () => ({ url: `products/` }) ,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;