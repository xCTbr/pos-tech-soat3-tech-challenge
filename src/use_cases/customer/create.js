import customer from '../../entities/Customer';

export default function createCustomer({
    id,
    name,
    cpf,
    email,
    phone,
    createdAt,
    updatedAt,
    customerRepository
}){
    if (!name || !cpf) {
        throw new Error('Name and CPF fields cannot be empty');
    } 

    const newCustomer = customer({id, name, cpf, email,phone,createdAt,updatedAt})

    return customerRepository.create(newCustomer); 

}