import type { HTMLInputTypeAttribute } from "react";

export type UserDetailItemProps = {
  label: string;
  name: string;
  value: string;
  editable?: boolean;
  type?: HTMLInputTypeAttribute;
};

export function UserDetailItem({
  type = "text",
  label,
  name,
  value,
  editable = true,
}: UserDetailItemProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">
        {!editable ? (
          label
        ) : (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between items-center">
        {editable ? (
          <div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type={type}
                name={name}
                id={name}
                defaultValue={value}
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
