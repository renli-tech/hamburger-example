import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import Product from "./product.entity";
import ProductService from "./product.service";

@Service()
@Resolver(Product)
class ProductResolver {
  @Inject()
  productService: ProductService;

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return await this.productService.products();
  }

  @Mutation(() => Product)
  async addProduct(
    @Arg("name") name: string,
    @Arg("price") price: number
  ): Promise<Product> {
    return await this.productService.addProduct(name, price);
  }
}

export default ProductResolver;
