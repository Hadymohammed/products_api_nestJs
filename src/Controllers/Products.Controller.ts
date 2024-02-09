//add products controller using nestJS
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from '../Services/Products.Service';
import { Product } from '../Models/Product.Model';
import { CreateProductDto } from 'src/DTOs/Products/CreateProduct.Dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateProductDto } from 'src/DTOs/Products/UpdateProduct.Dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  //add a method to get all products
  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }
  //add a method to get a single product
  @Get(':id')
  getProduct(@Param('id') id: number) {
    var product = this.productsService.getProduct(id);
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }
  //add a method to add a product
  @Post()
  addProduct(@Body() product: CreateProductDto) {
    this.productsService.addProduct(product);
  }
  //add a method to update a product
  @Put(':id')
  updateProduct(@Param('id') id: number, @Body() product: UpdateProductDto) {
    this.productsService.updateProduct(id, product);
  }
  //add a method to delete a product
  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    this.productsService.deleteProduct(id);
  }
}
