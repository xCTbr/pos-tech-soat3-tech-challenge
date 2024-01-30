import statusGateway from "../../application/statusGateway.js";

const gateway = statusGateway();
export default function getAllStatus() {
	//console.log(customerRepository);
	return gateway.findAll();
}