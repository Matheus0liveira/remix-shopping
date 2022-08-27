import type { Users as UsersAPI } from "@prisma/client";

export namespace Users {
  export type User = Omit<UsersAPI, "password" | "updatedAt" | "createdAt">;

  export type Login = {
    email: string;
    password: string;
  };
  export type UserContext = Partial<{
    user: User;
    isLogged: boolean;
  }> & { setUser: (user: User) => void };

  export type JWTUser = {
    id: string;
    email: string;
    name: string;
    iat: number;
  };
}
