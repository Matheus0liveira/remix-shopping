import type { Products as ProductsAPI } from "@prisma/client";

export namespace Products {
  export type Product = ProductsAPI;

  export type LoaderData = {
    product: Product;
  };
}
