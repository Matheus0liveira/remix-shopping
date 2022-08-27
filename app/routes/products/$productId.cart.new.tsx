import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { API as CartAPI } from "~/features/carts";
import { cookies } from "~/features/users";

export const action: ActionFunction = async ({ params, request }) => {
  const user = await cookies.getUser(request);

  if (!user) return redirect("/user/login");

  const cart = await CartAPI.cartService.addProductToCart(
    params.productId!,
    user.id
  );

  console.log({ cart });

  return redirect("/products/cart");
};
