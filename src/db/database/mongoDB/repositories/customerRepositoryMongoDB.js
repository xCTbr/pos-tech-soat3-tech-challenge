import CustomerModel from "../models/customer.js";

export default function customerRepositoryMongoDB() {

	const add = async (customerEntity) => {
	
		console.log('customer repository');
		
		const newCustomer = await CustomerModel({
			// customerId: customerEntity.getCustomerId(),
			name: customerEntity.getName(),
			cpf: customerEntity.getCpf(),
			email: customerEntity.getEmail(),
			phone: customerEntity.getPhone(),
			
			createdAt: new Date()
		})
		
		return newCustomer.save();
	};

	const findAll = (params) => CustomerModel.find();
    
	const findById = (id) => CustomerModel.findById(id);
	
	const findByCPF = (cpf) => CustomerModel.findOne({ 'cpf': cpf });
	//const findById = (id) => CustomerModel.findById(id).select('-password');

	const deleteById = (id) => CustomerModel.findByIdAndRemove(id);
	
	const updateById = (id, customerEntity) => {
		const updatedCustomer = {
			name: customerEntity.getName(),
			cpf: customerEntity.getCpf(),
			email: customerEntity.getEmail(),
			phone: customerEntity.getPhone(),
			updatedAt: new Date()
		};
	
		return CustomerModel.findOneAndUpdate(
		  { _id: id },
		  { $set: updatedCustomer },
		  { new: true }
		);
	  };

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById,
		findByCPF
		
	}
}
