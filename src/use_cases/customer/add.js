import customer from "../../entities/Customer.js";
import customerGateway from "../../application/customerGateway.js";

const gateway = customerGateway();

export default function createCustomer(
    name,
    cpf,
    email,
    phone,
    createdAt,
    updatedAt
){
		//console.log('caso de uso - add custumer');
    if (!name || !cpf) {
    //throw new Error('Name and CPF fields cannot be empty');

      return Promise.resolve(`Name and CPF fields cannot be empty`);
    } 

    // const newCustomer = customer({id, name, cpf, email, phone, createdAt, updatedAt})
		const newCustomer = customer(name, cpf, email, phone, createdAt, updatedAt)
    
    return gateway.add(newCustomer);
		// return Promise.resolve('Joia')
}