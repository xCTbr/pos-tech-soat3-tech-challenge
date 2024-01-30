import customerGateway from "../../application/customerGateway.js";
const gateway = customerGateway();

export default function getAllCustomers() {
	//console.log(customerRepository);
	return gateway.findAll();
}