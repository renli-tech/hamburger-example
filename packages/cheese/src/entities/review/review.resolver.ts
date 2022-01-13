import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Inject, Service } from "typedi";
import User from "./extends/entities/user.entity";
import UserEntity from "../user/user.entity";
import ProductEntity from "../product/product.entity";
import Review from "./review.entity";
import ReviewService from "./review.service";
import Product from "./extends/entities/product.entity";

@Service()
@Resolver(Review)
class ReviewResolver {
  @Inject()
  reviewService: ReviewService;

  @Query(() => [Review])
  async reviews(): Promise<Review[]> {
    return await this.reviewService.reviews();
  }

  @FieldResolver(() => User, { nullable: true })
  async user(@Root() review: Review): Promise<User | null> {
    const user = await UserEntity.findOne(review.userId.toString());

    return user ? user : null;
  }
  @FieldResolver(() => Product, { nullable: true })
  async product(@Root() review: Review): Promise<Product | null> {
    const product = await ProductEntity.findOne(review.productId.toString());

    return product ? product : null;
  }
}

export default ReviewResolver;
