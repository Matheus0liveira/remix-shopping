import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ params }) => {
  console.log(params.productId);

  return redirect("/products/cart");
};
