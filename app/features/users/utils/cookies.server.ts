import { createCookie } from "@remix-run/node";

export const cookieUserToken = createCookie("user-token");
