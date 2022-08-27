export type UserDetailItemProps = {
  label: string;
  value: string;
};

export function UserDetailItem({ label, value }: UserDetailItemProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between items-center">
        {value}
      </dd>
    </div>
  );
}
