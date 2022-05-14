import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('api/v1/product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async getAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
}
