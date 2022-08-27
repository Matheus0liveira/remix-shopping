import type { Products } from "@prisma/client";
import { db } from "~/utils/db.server";
import type { Type } from ".";
import { API as ProductAPI } from "../products";

class CartsService {
  async addProductToCart(productId: string, userId: string) {
    const product = await ProductAPI.productsService.findOne(productId);

    if (!product) throw new Response("Product not found", { status: 404 });

    const cart = await this.findOneByUserId(userId);

    if (cart) return this.updateCart(cart.id, product);

    return this.create(product.id, userId);
  }
  async removeProductToCart(productId: string, userId: string) {
    const product = await ProductAPI.productsService.findOne(productId);

    if (!product) throw new Response("Product not found", { status: 404 });

    const cart = await this.findOneByUserId(userId);
    const price = product.promoPrice ?? product.totalPrice;

    if (!cart) throw new Error("Cart not found");

    const cartsOnProducts = await db.cartsOnProducts.findFirst({
      where: { productId: product.id, cartId: cart.id },
    });

    if (!cartsOnProducts) throw new Error("Product not found");

    await db.carts.update({
      where: { id: cart.id },
      data: {
        totalValue: cart.totalValue - price,
      },
    });

    return await db.cartsOnProducts.delete({
      where: { id: cartsOnProducts.id },
    });
  }

  private async create(productId: string, userId: string) {
    const product = await ProductAPI.productsService.findOne(productId);
    if (!product) throw new Response("Product not found", { status: 404 });

    const price = product.promoPrice ?? product.totalPrice;
    return await db.carts.create({
      data: {
        totalValue: price,
        products: {
          create: [{ productId: product.id }],
        },
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  private async findOneByUserId(userId: string) {
    return db.carts.findUnique({ where: { userId } });
  }

  async findOne(userId: string): Promise<Type.Carts.ProductsWithQuantity[]> {
    const cart = await db.carts.findUnique({
      where: { userId },
      include: { products: { select: { product: true } } },
    });

    if (!cart) throw Error("Cart not found");

    cart.products = cart.products.reduce((acc, current) => {
      const existsProduct = acc.find(
        ({ product }) => product.id === current.product.id
      );

      if (existsProduct) {
        acc[acc.indexOf(existsProduct)].product.quantity =
          (acc[acc.indexOf(existsProduct)].product.quantity ?? 1) + 1;
        return acc;
      }

      acc.push({
        ...current,
        product: {
          ...current.product,
          quantity: 1,
        },
      });

      return acc;
    }, [] as Type.Carts.ProductsWithQuantity[]);

    return cart as unknown as Type.Carts.ProductsWithQuantity[];
  }

  private async updateCart(id: string, product: Products) {
    const price = product.promoPrice ?? product.totalPrice;

    const cart = await db.carts.findUnique({ where: { id } });

    if (!cart) throw new Response("Cart not found", { status: 404 });

    return db.carts.update({
      where: { id },
      data: {
        totalValue: cart.totalValue + price,
        products: {
          connectOrCreate: [
            {
              create: { productId: product.id },
              where: {
                id: cart.id,
              },
            },
          ],
        },
      },
    });
  }
}

export const cartService = new CartsService();
