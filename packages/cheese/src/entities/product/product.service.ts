import { Service } from "typedi";
import Product from "./product.entity";

@Service()
class ProductService {
  async products(): Promise<Product[]> {
    return await Product.find({});
  }

  async addProduct(name: string, price: number): Promise<Product> {
    const product = Product.create({
      name,
      price,
    });

    await product.save();

    return product;
  }
}

export default ProductService;
