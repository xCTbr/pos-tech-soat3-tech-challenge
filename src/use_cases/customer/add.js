import customer from "../../entities/Customer.js";

export default function createCustomer({
    name,
    cpf,
    email,
    phone,
		skype,
    createdAt,
    updatedAt,
    dbRepository
}){
		console.log('caso de uso - add');
    if (!name || !cpf) {
      throw new Error('Name and CPF fields cannot be empty');
    } 

    // const newCustomer = customer({id, name, cpf, email, phone, createdAt, updatedAt})
		const newCustomer = customer({name, cpf, email, phone, skype})

    return dbRepository.add(newCustomer);
		// return Promise.resolve('Joia')
}