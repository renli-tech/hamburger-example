import User from "./user.entity";

export async function resolveUserReference(
  reference: Pick<User, "id">
): Promise<User | undefined> {
  const products = await User.findOne({ id: reference.id });

  return products;
}
