import { UserDetailItem } from "./UserDetailItem";

export function UserDetails() {
  return (
    <div className="max-w-7xl mx-auto px-2 mt-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <form className="border-t border-gray-200">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Info
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details.
              </p>
            </div>
          </div>
          <dl>
            <UserDetailItem label="Full name" value="Margot Foster" />
            <UserDetailItem
              label="Email address"
              value="margotfoster@example.com"
            />
            <UserDetailItem label="Password" value="******" />
          </dl>
        </form>
      </div>
    </div>
  );
}
