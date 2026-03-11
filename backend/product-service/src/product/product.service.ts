import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  create(product: Partial<Product>) {
    const newProduct: Product = {
      id: uuid(),
      name: product.name || '',
      price: product.price || 0,
      description: product.description || '',
      stock: product.stock || 0,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((p) => p.id === id);
  }

  remove(id: string) {
    this.products = this.products.filter((p) => p.id !== id);

    return { deleted: true };
  }
}
