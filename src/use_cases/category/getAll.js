import categoryGateway from "../../application/categoryGateway.js";

const gateway = categoryGateway();
export default function getAllCategories() {
	return gateway.findAll();
}