import { Injectable } from '@nestjs/common';
import { Product } from '../Models/Product.Model';
@Injectable()
export class ProductsRepository {
  private lastId: number=8;
  products: Product[] = [
    {
      id: 1,
      name: 'Book',
      price: 29.99,
      description: 'This is a good book!',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqza33RNZnQHiTGFhDrB9Ximei8akFgoj1Hg&usqp=CAU',
    },
    {
      id: 2,
      name: 'T-Shirt',
      price: 19.99,
      description: 'This is a good t-shirt!',
      imageUrl:
        'https://mcprod.hyperone.com.eg/media/catalog/product/cache/1ca275941aea0ae98b372dcb44b7c67a/2/0/2041400015100_1_6.jpg',
    },
    {
      id: 3,
      name: 'Hat',
      price: 9.99,
      description: 'This is a good hat!',
      imageUrl:
        'https://sundayafternoons.com/cdn/shop/products/havana-hat-tweed-front-ss21-2500px_600x@2x.jpg?v=1702421843',
    },
    {
      id: 4,
      name: 'Bag',
      price: 49.99,
      description: 'This is a good bag!',
      imageUrl:
        'https://contents.mediadecathlon.com/p2439905/k$add1379a618f884048c424fe95e54e09/-extend-40-60-.jpg?format=auto&quality=40&f=452x452',
    },
    {
      id: 5,
      name: 'Shoe',
      price: 59.99,
      description: 'This is a good shoe!',
      imageUrl: 'https://www.google.com',
    },
    {
      id: 6,
      name: 'Watch',
      price: 99.99,
      description: 'This is a good watch!',
      imageUrl:
        'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800',
    },
    {
      id: 7,
      name: 'Phone',
      price: 199.99,
      description: 'This is a good phone!',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7C8t1lE0Kao_zpb-d4hphiA2T-njMJ4uoqg&usqp=CAU',
    },
    {
      id: 8,
      name: 'Laptop',
      price: 999.99,
      description: 'This is a good laptop!',
      imageUrl:
        'https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg?auto=webp&quality=75&width=1024',
    },
  ];

  //add a method to get all products
  getAllProducts() {
    return this.products;
  }
  //add a method to get a single product
  getProduct(id: number) {
    return this.products.find((p) => p.id == id);
  }
  //add a method to add a product
  addProduct(product: Product) {
    this.lastId++;
    this.products.push(product);
  }
  //add a method to update a product
  updateProduct(product: Product) {
    const index = this.products.findIndex((p) => p.id == product.id);
    this.products[index] = product;
  }
  //add a method to delete a product
  deleteProduct(id: number) {
    this.products = this.products.filter((p) => p.id != id);
  }
  getLastId(){
    return this.lastId;
  }
}
