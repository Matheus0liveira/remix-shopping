import { useState } from "react";
import { classNames } from "~/shared";
import { UserDetailItem } from "./UserDetailItem";

export function UserDetails() {
  const [isEditable, setIsEditable] = useState(false);
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
            <div className="flex gap-2">
              <button
                type="button"
                className={classNames(
                  "border rounded-md py-1 px-8 flex items-center justify-center text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 ",
                  isEditable
                    ? "bg-gray-500 hover:bg-neutral-400 focus:ring-neutral-500"
                    : "bg-indigo-600 border-indigo-600 border-transparent hover:bg-indigo-700 focus:ring-indigo-500"
                )}
                onClick={() => setIsEditable((pv) => !pv)}
              >
                {isEditable ? "Cancelar" : "Editar"}
              </button>
              {isEditable && (
                <button
                  type="submit"
                  className="bg-indigo-600 border-indigo-600 border-transparent hover:bg-indigo-700 focus:ring-indigo-500 border rounded-md py-1 px-8 flex items-center justify-center text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Salvar
                </button>
              )}
            </div>
          </div>
          <dl>
            <UserDetailItem
              label="Full name"
              name="full_name"
              value="Margot Foster"
              editable={isEditable}
            />
            <UserDetailItem
              label="Email address"
              name="email_address"
              value="margotfoster@example.com"
              editable={isEditable}
            />
            <UserDetailItem
              type="password"
              label="Password"
              name="password"
              value="******"
              editable={isEditable}
            />
          </dl>
        </form>
      </div>
    </div>
  );
}
