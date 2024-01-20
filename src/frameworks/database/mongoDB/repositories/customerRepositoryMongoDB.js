import CustomerModel from "../models/customer.js";

export default function customerRepositoryMongoDB() {

	const add = async (customerEntity) => {
		const newCustomer = await CustomerModel({
			// customerId: customerEntity.getCustomerId(),
			name: customerEntity.getName(),
      cpf: customerEntity.getCpf(),
      email: customerEntity.getEmail(),
      phone: customerEntity.getPhone(),
      skype: customerEntity.getSkype(),
      createdAt: new Date()
		})

		return newCustomer.save();
	};

	const findAll = (params) => CustomerModel.find()
      

	

	return {
		add,
		findAll
	}
}
