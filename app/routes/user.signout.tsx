import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { cookies } from "~/features/users";

export const loader: LoaderFunction = async () => {
  return redirect("/user/login", {
    headers: {
      "Set-Cookie": await cookies.cookieUserToken.serialize({}),
    },
  });
};
