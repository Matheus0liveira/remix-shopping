import { useNavigate } from "@remix-run/react";
import { ProductDetails } from "~/features/products";

export default function () {
  const navigate = useNavigate();
  return <ProductDetails open close={() => navigate("..")} />;
}
