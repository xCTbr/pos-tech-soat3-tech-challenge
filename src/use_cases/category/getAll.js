import categoryGateway from "../../application/categoryGateway.js";

const gateway = categoryGateway();
export default function getAllCategories() {
	//console.log(customerRepository);
	return gateway.findAll();
}