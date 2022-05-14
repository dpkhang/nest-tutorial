import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/product.controller';
import { productProvider } from '../providers/product.provider';
import { ProductService } from '../services/product.service';

@Module({
  controllers: [ProductController],
  providers: [...productProvider, ProductService],
})
export class ProductModule {}
