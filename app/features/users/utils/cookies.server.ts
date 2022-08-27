import { createCookie } from "@remix-run/node";
import { decode } from "jsonwebtoken";
import type { Type } from "..";

export const cookieUserToken = createCookie("user-token");

export const getToken = async (request: Request): Promise<string> => {
  const cookieHeader = request.headers.get("Cookie");
  const { token } = await cookieUserToken.parse(cookieHeader);

  return token;
};

export const getUser = async (
  request: Request
): Promise<Type.Users.JWTUser> => {
  const token = await getToken(request);

  const user = decode(token) as Type.Users.JWTUser;

  return user;
};
