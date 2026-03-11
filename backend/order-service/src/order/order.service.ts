import { Injectable } from '@nestjs/common'
import axios from 'axios'
import { v4 as uuid } from 'uuid'

@Injectable()
export class OrderService {

 private orders:any[] = []

 async createOrder(productId:string, quantity:number) {

 const response = await axios.get(
 `http://localhost:3000/products/${productId}`
 )

 const product = response.data

 const totalPrice = product.price * quantity

 const order = {
 id: uuid(),
 productId,
 quantity,
 totalPrice
 }

 this.orders.push(order)

 return order

 }

 getOrders() {
 return this.orders
 }

}