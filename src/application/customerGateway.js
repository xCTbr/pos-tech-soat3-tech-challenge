import customerRepositoryMongoDB from "../db/database/mongoDB/repositories/customerRepositoryMongoDB.js";

export default function customerGateway() {
    
	const findById = (id) => customerRepositoryMongoDB().findById(id);
	const add = (customer) => customerRepositoryMongoDB().add(customer);
	const findAll = () => customerRepositoryMongoDB().findAll();
	const updateById = (id, customer) => customerRepositoryMongoDB().updateById(id, customer);
	const deleteById = (id) => customerRepositoryMongoDB().deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById		
	}
}