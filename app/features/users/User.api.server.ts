import { db } from "~/utils/db.server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import type { Type } from ".";

class UserService {
  async login({ email, password }: Type.Users.Login) {
    const user = await db.users.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password)))
      throw new Error("password/email not match");

    const payload = { id: user.id, email: user.email, name: user.name };

    return jwt.sign(payload, process.env.JWT_SECRET!);
  }
}

export const userService = new UserService();
