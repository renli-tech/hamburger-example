import Product from "./product.entity";

export async function resolveProductReference(
  reference: Pick<Product, "id">
): Promise<Product | undefined> {
  const products = await Product.findOne({ id: reference.id });

  return products;
}
