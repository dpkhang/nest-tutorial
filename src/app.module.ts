import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user.module';
import { DatabaseModule } from './modules/database.module';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule,
    ProductModule,
  ],
})
export class AppModule {}
