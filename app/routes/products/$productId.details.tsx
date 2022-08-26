import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import type { Type } from "~/features/products";
import { ProductDetails } from "~/features/products";
import { db } from "~/utils/db.server";
export const loader = async ({ params }: LoaderArgs) => {
  const { productId: id } = params;

  const product = await db.products.findUnique({ where: { id } });

  if (!product) throw new Response("Product Not Found", { status: 404 });

  return { product };
};

export default function () {
  const navigate = useNavigate();

  const { product } = useLoaderData<Type.Products.LoaderData>();

  return (
    <ProductDetails
      open
      close={() => navigate("..")}
      product={product as unknown as Type.Products.Product}
    />
  );
}
