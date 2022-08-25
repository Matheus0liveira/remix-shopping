import { Link } from "@remix-run/react";

export type CartProductItemProps = {
  product: {
    id: number;
    name: string;
    price: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    quantity: number;
  };
};

export function CartProductItem({ product }: CartProductItemProps) {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link to={product.href}> {product.name} </Link>
            </h3>
            <p className="ml-4">{product.price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {product.quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
