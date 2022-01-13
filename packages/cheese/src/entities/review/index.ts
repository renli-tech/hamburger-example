import { listen } from "../../modules/listen";
import Review from "./review.entity";
import ReviewResolver from "./review.resolver";
import { resolveReviewReference } from "./review.reference";
import { createSubgraph } from "../../helpers/createSubgraph";
import User from "./extends/entities/user.entity";
import Product from "./extends/entities/product.entity";
import { UserResolver } from "./extends/resolvers/user.resolver";
import { ProductResolver } from "./extends/resolvers/product.resolver";

export * from "./review.entity";
export * from "./review.resolver";

const name = "review";

export async function init(): Promise<string> {
  const { url, schema } = await listen(
    {
      name,
      orphanedTypes: [User, Product, Review],
      resolvers: [UserResolver, ProductResolver, ReviewResolver],
    },
    { __resolveReference: resolveReviewReference }
  );

  await createSubgraph(name, schema);

  return url;
}
