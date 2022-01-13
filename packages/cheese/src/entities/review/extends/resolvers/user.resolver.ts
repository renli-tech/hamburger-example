import { FieldResolver, Resolver, Root } from "type-graphql";
import Review from "../../review.entity";
import User from "../entities/user.entity";

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => [Review])
  async reviews(@Root() user: User): Promise<Array<Review>> {
    return await Review.find({ userId: user.id.toString() });
  }
}
