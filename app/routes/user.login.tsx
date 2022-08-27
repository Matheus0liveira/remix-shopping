import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { makeDomainFunction } from "remix-domains";
import { performMutation } from "remix-forms";
import { schemas } from "~/features/users";
import { API } from "~/features/users";
import { UserLogin } from "~/features/users";
import { cookies } from "~/features/users";

export const loader: LoaderFunction = async ({ request }) => {
  const token = await cookies.getToken(request);

  if (token) return redirect("/");

  return { isLogged: false };
};

const mutation = makeDomainFunction(schemas.login)(async (values) => {
  const token = await API.userService.login(values);

  return { token };
});

export const action: ActionFunction = async ({ request }) => {
  const result = await performMutation({
    request,
    schema: schemas.login,
    mutation,
  });

  if (!result.success) {
    return result;
  }

  return json(result, {
    headers: {
      "Set-Cookie": await cookies.cookieUserToken.serialize({
        token: result.data.token,
      }),
    },
  });
};

export default function () {
  return <UserLogin />;
}
