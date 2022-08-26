import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { ProductItem } from "~/features/products";
import { ProductList } from "~/features/products/components/ProductList";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const products = await db.products.findMany();

  return { products };
};

export default function () {
  const { products } = useLoaderData<typeof loader>();
  return (
    <>
      <Outlet />
      <ProductList>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.name}
            price={`${product.totalPrice}`}
            promoPrice={`${product.promoPrice}`}
            imageAlt={product.name}
            imageSrc={product.imageSrc}
            href={`${product.id}/details`}
          />
        ))}
      </ProductList>
    </>
  );
}
