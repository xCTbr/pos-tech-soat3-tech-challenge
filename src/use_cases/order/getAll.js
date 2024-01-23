export default function getAllOrders(orderRepository) {
	//console.log(orderRepository);
	return orderRepository.findAll();
}