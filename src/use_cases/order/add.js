import order from "../../entities/Order.js";
import orderGateway from "../../application/orderGateway.js";

const gateway = orderGateway();

export default function createOrder(
    orderNumber,
    customer,
    orderProducts, //array of products
    totalOrderPrice,
    orderStatus,
    createdAt,
		updatedAt,
		orderProductsDescription,
){
    if (!orderNumber || !customer || !orderProducts || !totalOrderPrice || !orderStatus) {
      return Promise.resolve(`Order Number, Customer, Total Order Price and Order Status fields cannot be empty`);
    } 

		const newOrder = order(orderNumber, customer, orderProducts, totalOrderPrice, orderStatus, createdAt, updatedAt, orderProductsDescription);
    
    return gateway.add(newOrder);
}