import paymentGateway from "../../application/paymentGateway.js";
//import paymentRepositoryMongoDB from "../../db/database/mongoDB/repositories/paymentRepositoryMongoDB.js";

export default function getAllPayment() {
	//console.log(customerRepository);
	//return paymentRepository.findAll();
	return paymentGateway().findAll();
}

//import paymentGateway from "../../application/paymentGateway.js";
//import getAllPayment from "./yourModule.js";

// Inject the dependency when calling the function
//const allPayments = getAllPayment(paymentGateway);
