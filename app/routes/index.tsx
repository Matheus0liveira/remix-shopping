import { Header } from "~/components";
import { Cart } from "~/features/carts";
import { ProductDetails, ProductItem } from "~/features/products";

export default function () {
  return (
    <>
      <Header />
      <ProductItem />
      <ProductDetails open={false} close={console.log} />
      <Cart open={false} close={console.log} />
    </>
  );
}
