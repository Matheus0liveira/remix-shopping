import { Form, Link } from "@remix-run/react";
import { formatNumberToCurrencyBRL } from "~/utils/currency";
import type { Type } from "..";

export type CartProductItemProps = {
  product: Type.Carts.ProductWithQuantity;
};

export function CartProductItem({ product }: CartProductItemProps) {
  const formatedTotalPrice = formatNumberToCurrencyBRL(product.totalPrice);
  const formatedPromoPrice =
    product.promoPrice && formatNumberToCurrencyBRL(product.promoPrice);
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={product.imageSrc}> {product.name} </Link>
            </h3>
            <p className="ml-4">{formatedPromoPrice ?? formatedTotalPrice}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product.quantity}</p>

          <Form
            className="flex"
            action={`/products/${product.id}/cart/delete`}
            method="post"
          >
            <button
              type="submit"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </Form>
        </div>
      </div>
    </li>
  );
}
