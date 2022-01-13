import { Arg, FieldResolver, Mutation, Resolver, Root } from "type-graphql";
import { Inject, Service } from "typedi";
import Review from "../../review.entity";
import ReviewService from "../../review.service";
import Product from "../entities/product.entity";

@Service()
@Resolver(Product)
export class ProductResolver {
  @Inject()
  reviewService: ReviewService;
  @FieldResolver(() => [Review])
  async reviews(@Root() product: Product): Promise<Array<Review>> {
    return await Review.find({ productId: product.id.toString() });
  }

  @Mutation(() => Review)
  async reviewProduct(
    @Arg("reviewContent") reviewContent: string,
    @Arg("userId") userId: string,
    @Arg("productId") productId: string
  ): Promise<Review> {
    return await this.reviewService.reviewProduct(
      reviewContent,
      productId,
      userId
    );
  }
}
