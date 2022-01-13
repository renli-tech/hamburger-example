import Review from "./review.entity";

export async function resolveReviewReference(
  reference: Pick<Review, "id">
): Promise<Review | undefined> {
  const products = await Review.findOne({ id: reference.id });

  return products;
}
