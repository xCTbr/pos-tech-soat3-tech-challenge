import orderRepositoryMongoDB from "../db/database/mongoDB/repositories/orderRepositoryMongoDB.js";

export default function orderGateway() {
    
	const findById = (id) => orderRepositoryMongoDB().findById(id);
	const add = (order) => orderRepositoryMongoDB().add(order);
	const findAll = () => orderRepositoryMongoDB().findAll();
	const updateById = (id, order) => orderRepositoryMongoDB().updateById(id, order);
	const deleteById = (id) => orderRepositoryMongoDB().deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById		
	}
}