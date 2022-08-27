import type { CartsOnProducts, Products as ProductsAPI } from "@prisma/client";

export namespace Carts {
  export type Products = ProductsAPI[];
  export type Product = ProductsAPI;

  export type LoaderData = {
    cart: {
      totalValue: number;
      products: (CartsOnProducts & {
        product: ProductsWithQuantity["product"];
      })[];
    };
  };

  export type ProductWithQuantity = ProductsAPI & { quantity: number };

  export type ProductsWithQuantity = {
    product: ProductWithQuantity;
  };
}
