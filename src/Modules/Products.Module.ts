//add Products Module using nestJS
import { Module } from '@nestjs/common';
import { ProductsController } from '../Controllers/Products.Controller';
import { ProductsService } from '../Services/Products.Service';
import { ProductsRepository } from '../Repository/Products.Repository';
@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
