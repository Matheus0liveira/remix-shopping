import { Outlet, useLoaderData } from "@remix-run/react";
import { API, ProductItem } from "~/features/products";
import { ProductList } from "~/features/products/components/ProductList";

export const loader = async () => {
  return { products: await API.productsService.findAll() };
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
            price={product.totalPrice}
            promoPrice={product.promoPrice}
            imageAlt={product.name}
            imageSrc={product.imageSrc}
            href={`${product.id}/details`}
          />
        ))}
      </ProductList>
    </>
  );
}
