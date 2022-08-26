import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { makeDomainFunction } from "remix-domains";
import { performMutation } from "remix-forms";
import { schemas } from "~/features/users";
import { API } from "~/features/users";
import { UserLogin } from "~/features/users";
import { cookieUserToken } from "~/features/users/utils/cookies.server";

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const isLogged = await cookieUserToken.parse(cookieHeader);

  console.log({ isLogged });
  if (isLogged) return redirect("/");

  return { isLogged: false };
};

const mutation = makeDomainFunction(schemas.login)(async (values) => {
  console.log({ values });
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
      "Set-Cookie": await cookieUserToken.serialize(result.data.token),
    },
  });

  // if (result.success) {
  //   const { token } = result.data;
  // }

  // return { ok: true };
};

export default function () {
  return <UserLogin />;
}
