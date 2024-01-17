import { customer } from '../models/Customer.js';

// move it to a proper place
function omit(obj, ...props) {
  const result = { ...obj };
  props.forEach((prop) => delete result[prop]);
  return result;
}

export default function customerRepositoryMongoDB() {
  // const findByProperty = (params) =>
  //   UserModel.find(omit(params, 'page', 'perPage'))
  //     .skip(params.perPage * params.page - params.perPage)
  //     .limit(params.perPage);

  // const countAll = (params) =>
  //   UserModel.countDocuments(omit(params, 'page', 'perPage'));

  // const findById = (id) => UserModel.findById(id).select('-password');

  const add = (customerEntity) => {
    const newCustomer = new customer({
      customerId: customerEntity.getCustomerId(),
			name: customerEntity.getName(),
      cpf: customerEntity.getCpf(),
      email: customerEntity.getEmail(),
      phone: customerEntity.getPhone(),
      createdAt: new Date()
    });

    return newCustomer.save();
  };

  return {
    // findByProperty,
    // countAll,
    // findById,
    add
  };
}