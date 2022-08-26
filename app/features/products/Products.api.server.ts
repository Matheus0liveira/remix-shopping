import { db } from "~/utils/db.server";
import type { Type } from ".";

class ProductsService {
  async findOne(id: Type.Products.Product["id"]) {
    return db.products.findUnique({ where: { id } });
  }

  async findAll() {
    return db.products.findMany();
  }
}

export const productsService = new ProductsService();
