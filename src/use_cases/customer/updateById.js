import customer from "../../entities/Customer.js";
import customerGateway from "../../application/customerGateway.js";

const gateway = customerGateway();

export default function updateById(
    id,
    name,
    cpf,
    email,
    phone,
    updatedAt
) {
    //console.log('Use Case update ->', name);
    
  // validate
  if (!name || !cpf) {
    //throw new Error('Name and CPF fields are mandatory');
    return Promise.resolve('Name and CPF fields are mandatory');
  }
  const updatedCustomer = customer(
    name,
    cpf,
    email,
    phone,
    updatedAt
  );

  return gateway.findById(id).then((foundCustomer) => {
    if (!foundCustomer) {
      //throw new Error(`No customer found with id: ${id}`);
      return Promise.resolve(`No customer found with id: ${id}`);
    }
    return gateway.updateById(id, updatedCustomer);
  });
}
