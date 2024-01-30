import orderGateway from "../../application/orderGateway.js";

const gateway = orderGateway();

export default function getAllOrders() {
	//console.log(orderRepository);
	return gateway.findAll();
}