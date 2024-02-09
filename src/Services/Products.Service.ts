//add products service using nestJS that will have the CRUD business logic and will be used by the products controller
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../Models/Product.Model';
import { ProductsRepository } from '../Repository/Products.Repository';
import { CreateProductDto } from 'src/DTOs/Products/CreateProduct.Dto';
import { UpdateProductDto } from 'src/DTOs/Products/UpdateProduct.Dto';
@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}
  //add a method to get all products
  getAllProducts() {
    return this.productsRepository.getAllProducts();
  }
  //add a method to get a single product
  getProduct(id: number) {
    return this.productsRepository.getProduct(id);
  }
  //add a method to add a product
  addProduct(product: CreateProductDto) {
    let productModel: Product = {
      id: this.productsRepository.products.length + 1,
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    };
    this.productsRepository.addProduct(productModel);
  }
  //add a method to update a product
  updateProduct(id: number, product: UpdateProductDto) {
    let dbProduct = this.productsRepository.getProduct(id);
    if (!dbProduct) {
      throw new NotFoundException();
    }
    dbProduct.name = product.name;
    dbProduct.price = product.price;
    dbProduct.description = product.description;
    dbProduct.imageUrl = product.imageUrl;

    this.productsRepository.updateProduct(dbProduct);
  }
  //add a method to delete a product
  deleteProduct(id: number) {
    this.productsRepository.deleteProduct(id);
  }
}
