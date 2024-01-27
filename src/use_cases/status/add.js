import status from "../../entities/Status.js";
import statusGateway from "../../application/statusGateway.js";

const gateway = statusGateway();

export default function createStatus(
    
    description,
    createdAt,
    updatedAt
){
		console.log('caso de uso - add status');
    if (!description) {
    //throw new Error('Name and CPF fields cannot be empty');

      return Promise.resolve(`Description fields cannot be empty`);
    } 
    console.log('caso de uso - add status', description);
    // const newCustomer = customer({id, name, cpf, email, phone, createdAt, updatedAt})
		const newStatus = status(description, createdAt, updatedAt)
    console.log('caso de uso - add status->', description);
    return gateway.add(newStatus);
		// return Promise.resolve('Joia')
}