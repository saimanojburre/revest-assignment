import { Controller, Post, Body, Get } from '@nestjs/common'
import { OrderService } from './order.service'

@Controller('orders')
export class OrderController {

 constructor(private orderService: OrderService) {}

 @Post()
 async create(@Body() body:any) {

 return this.orderService.createOrder(
 body.productId,
 body.quantity
 )

 }

 @Get()
 getOrders() {
 return this.orderService.getOrders()
 }

}