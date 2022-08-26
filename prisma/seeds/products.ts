import type { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

export async function createProduct(prisma: PrismaClient) {
  await prisma.$executeRawUnsafe("DELETE FROM products; VACUUM;");
  [...Array(10).keys()].map(async () => {
    const product = await prisma.products.create({
      data: {
        name: faker.commerce.product(),
        imageSrc: faker.image.food(),
        totalPrice: +faker.commerce.price(),
        totalQuantity: +faker.random.numeric(),
        description: faker.lorem.sentences(3),
      },
    });
    console.log(product);
  });
}
