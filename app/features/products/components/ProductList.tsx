import type { ReactNode } from "react";

export type ProductListProps = {
  children: ReactNode;
};

export function ProductList({ children }: ProductListProps) {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Product Lists
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {children}
      </div>
    </div>
  );
}
