import type { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export async function createUser(prisma: PrismaClient) {
  await prisma.$executeRawUnsafe("DELETE FROM users; VACUUM;");
  const user = await prisma.users.create({
    data: {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: await bcrypt.hash("123456", 10),
    },
  });
  console.log({ user });

  return user;
}
