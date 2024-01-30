import order from "../../entities/Order.js";
import orderGateway from "../../application/orderGateway.js";

const gateway = orderGateway();

export default function createOrder(
    orderNumber,
    customer,
    // orderProducts, //array of products
    totalOrderPrice,
    orderStatus,
		orderProductsDescription,
    createdAt,
		updatedAt,
){
    if (!orderNumber || !customer || !totalOrderPrice || !orderStatus || !orderProductsDescription) {
      return Promise.resolve(`Order Number, Customer, Total Order Price and Order Status fields cannot be empty`);
    } 

		const newOrder = order(orderNumber, customer, totalOrderPrice, orderStatus, orderProductsDescription, createdAt, updatedAt);
    
    return gateway.add(newOrder);
}