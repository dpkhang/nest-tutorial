import { Inject, Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: typeof Product,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll<Product>();
  }
}
