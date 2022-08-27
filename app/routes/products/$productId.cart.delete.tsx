import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { API as CartAPI } from "~/features/carts";
import { cookies } from "~/features/users";

export const action: ActionFunction = async ({ params, request }) => {
  const user = await cookies.getUser(request);

  if (!user) return redirect("/user/login");

  await CartAPI.cartService.removeProductToCart(params.productId!, user.id);

  return redirect("/products/cart");
};
