import productGateway from "../../application/productGateway.js";

const gateway = productGateway();
export default function getAllProducts() {
	//console.log(productRepository);
	return gateway.findAll();
}