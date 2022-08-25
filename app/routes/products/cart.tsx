import { useNavigate } from "@remix-run/react";
import { Cart } from "~/features/carts";

export default function () {
  const navigate = useNavigate();
  return <Cart open close={() => navigate("..")} />;
}
