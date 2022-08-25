import { UserDetailItem } from "./UserDetailItem";

export function UserDetails() {
  return (
    <div className="max-w-7xl mx-auto px-2 mt-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Info
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details.
            </p>
          </div>
          <div>
            <button
              type="button"
              className=" bg-indigo-600 border border-transparent rounded-md py-1 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Editar
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <UserDetailItem name="Full name" value="Margot Foster" />
            <UserDetailItem
              name="Email address"
              value="margotfoster@example.com"
            />
            <UserDetailItem name="Password" value="******" />
          </dl>
        </div>
      </div>
    </div>
  );
}
