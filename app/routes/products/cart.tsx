import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import type { CatchBoundaryComponent } from "@remix-run/react/dist/routeModules";
import type { Type } from "~/features/carts";
import { API, Cart, EmptyCart } from "~/features/carts";
import { cookies } from "~/features/users/";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await cookies.getUser(request);
  if (!user) return redirect("/user/login");

  const cart = await API.cartService.findOne(user.id);

  if (!cart) throw new Response("Cart not found", { status: 404 });

  return { cart };
};

export default function () {
  const navigate = useNavigate();
  const { cart } = useLoaderData<Type.Carts.LoaderData>();

  return (
    <Cart
      open
      close={() => navigate("..")}
      totalValue={cart.totalValue}
      products={cart.products.map(
        ({ product }) => product as unknown as Type.Carts.ProductWithQuantity
      )}
    />
  );
}

export const CatchBoundary: CatchBoundaryComponent = () => {
  const navigate = useNavigate();
  const data = useLoaderData<typeof loader>();
  console.log({ data });
  return <EmptyCart open close={() => navigate("..")} />;
};
