import payment from "../../entities/Payment.js";
import paymentRepository from "../../application/paymentGateway.js";

const dbRepository = paymentRepository();
//const { getUserByIdFromDatabase } = require('../gateways/userGateway');

export default function createPayment(
    description,
    order,
    status,
    createdAt,
    updatedAt,
    //dbRepository
){
		console.log('caso de uso - add payment');
    if (!status || !order || !description) {
    //throw new Error('Name and CPF fields cannot be empty');

      return Promise.resolve(`Order and Status fields cannot be empty`);
    } 
console.log('caso de uso - add payment', description);
    // const newCustomer = customer({id, name, cpf, email, phone, createdAt, updatedAt})
		const newPayment = payment(description, order, status, createdAt, updatedAt)
    //console.log('caso de uso - add category->', newCategory);
    return dbRepository.add(newPayment);
		// return Promise.resolve('Joia')
}