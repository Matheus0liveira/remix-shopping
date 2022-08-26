import { Link } from "@remix-run/react";
import { classNames } from "~/shared";
import { formatNumberToCurrencyBRL } from "~/utils/currency";

export type ProductItemProps = {
  title: string;
  price: number;
  promoPrice?: number | null;
  imageSrc: string;
  imageAlt: string;
  href?: string;
};

export function ProductItem({
  imageAlt,
  imageSrc,
  price,
  promoPrice,
  title,
  href,
}: ProductItemProps) {
  const formatedPrice = formatNumberToCurrencyBRL(price);
  const formatedPromoPrice =
    promoPrice && formatNumberToCurrencyBRL(promoPrice);
  return (
    <Link to={href || ""} prefetch="intent">
      <div className="bg-white">
        <div className="mt-6">
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#!">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {title}
                  </a>
                </h3>
              </div>
              <div className={classNames("text-sm font-medium text-gray-900")}>
                {!!promoPrice && (
                  <span
                    className={classNames(
                      "mr-2 text-slate-500",
                      promoPrice ? "line-through" : "no-underline"
                    )}
                  >
                    {formatedPrice}
                  </span>
                )}
                <span>{formatedPromoPrice ?? formatedPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
