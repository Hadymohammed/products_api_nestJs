import { Module } from '@nestjs/common';
import { ProductsModule } from './Modules/Products.Module';

@Module({
  imports: [ProductsModule],
})
export class AppModule {}
