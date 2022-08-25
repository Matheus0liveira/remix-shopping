import type { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

export async function createCart(prisma: PrismaClient) {
  await prisma.$executeRawUnsafe("DELETE FROM carts; VACUUM;");
  const product = await prisma.products.findFirst();
  const user = await prisma.users.findFirst();

  if (!user || !product) return;
  const cartId = randomUUID();
  const carts = await prisma.carts.create({
    data: {
      id: cartId,
      totalValue: product.totalPrice,
      products: {
        create: [{ productId: product.id }],
      },
      user: {
        connect: { id: user.id },
      },
    },
  });
  console.log({ carts });
}
