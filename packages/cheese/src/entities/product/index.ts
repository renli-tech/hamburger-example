import { listen } from "../../modules/listen";
import Product from "./product.entity";
import ProductResolver from "./product.resolver";
import { resolveProductReference } from "./product.reference";
import { createSubgraph } from "../../helpers/createSubgraph";

export * from "./product.entity";
export * from "./product.resolver";

const name = "product";

export async function init(): Promise<string> {
  const { url, schema } = await listen(
    {
      name,
      orphanedTypes: [Product],
      resolvers: [ProductResolver],
    },
    { __resolveReference: resolveProductReference }
  );

  await createSubgraph(name, schema);

  return url;
}
