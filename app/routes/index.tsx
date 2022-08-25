import { ProductDetails, ProductItem } from "~/features/products";

export default function () {
  return (
    <>
      <ProductItem />
      <ProductDetails open close={console.log} />
    </>
  );
}
