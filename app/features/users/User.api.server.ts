import { db } from "~/utils/db.server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import type { Type } from ".";

class UserService {
  async login({ email, password }: Type.Users.Login) {
    const user = await db.users.findUnique({ where: { email } });

    if (!user) throw new Response("User not found", { status: 404 });

    if (!(await bcrypt.compare(password, user.password)))
      throw new Response("Password not matchs", { status: 401 });

    return jwt.sign(
      { id: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET!
    );
  }
}

export const userService = new UserService();
