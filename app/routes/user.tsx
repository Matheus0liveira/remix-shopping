import type { LoaderFunction } from "@remix-run/node";
import { UserDetails } from "~/features/users";
import { db } from "~/utils/db.server";

// export const loader: LoaderFunction = async () => {
// };

export default function () {
  return <UserDetails />;
}
