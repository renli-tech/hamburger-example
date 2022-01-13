import { ApolloError } from "apollo-server-express";
import { Service } from "typedi";
import Product from "../product/product.entity";
import User from "../user/user.entity";
import Review from "./review.entity";

@Service()
class ReviewService {
  async reviews(): Promise<Review[]> {
    return await Review.find({});
  }

  async reviewProduct(
    reviewContent: string,
    productId: string,
    userId: string
  ): Promise<Review> {
    const user = User.findOne(userId);

    if (!user) {
      throw new ApolloError("User doesn't exist");
    }

    const product = Product.findOne(userId);

    if (!product) {
      throw new ApolloError("Product doesn't exist");
    }

    const review = Review.create({
      reviewContent,
      userId,
      productId,
    });

    await review.save();

    return review;
  }
}

export default ReviewService;
