import { Outlet } from "@remix-run/react";
import { ProductItem } from "~/features/products";
import { ProductList } from "~/features/products/components/ProductList";

export default function () {
  return (
    <>
      <Outlet />
      <ProductList>
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$20"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          href="1/details"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
        <ProductItem
          title="Basic Tee"
          price="$35"
          promoPrice="$35"
          imageAlt="Front of men&#039;s Basic Tee in black."
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        />
      </ProductList>
    </>
  );
}
