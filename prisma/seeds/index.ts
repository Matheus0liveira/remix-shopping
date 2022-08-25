import { createUser } from "./user";
import { createProduct } from "./products";
import { createCart } from "./carts";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await createUser(prisma);
  await createProduct(prisma);
  await createCart(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
