//import customer from '../../../src/entities/Customer';
import customer from "../../entities/Customer.js";

export default function updateById(
    id,
    name,
    cpf,
    email,
    phone,
	skype,
    //createAt,
    updatedAt,
    dbRepository
) {
    //console.log('Use Case update ->', name);
    
  // validate
  if (!name || !cpf) {
    throw new Error('Name and CPF fields are mandatory');
  }
  const updatedCustomer = customer(
    name,
    cpf,
    email,
    phone,
	skype,
    //createAt,
    updatedAt
  );

  return dbRepository.findById(id).then((foundCustomer) => {
    if (!foundCustomer) {
      throw new Error(`No customer found with id: ${id}`);
    }
    return dbRepository.updateById(id, updatedCustomer);
  });
}
