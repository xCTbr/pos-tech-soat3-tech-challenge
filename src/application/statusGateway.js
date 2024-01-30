import statusRepositoryMongoDB from "../db/database/mongoDB/repositories/statusRepositoryMongoDB.js";

export default function statusGateway() {
    
	const findById = (id) => statusRepositoryMongoDB().findById(id);
	const add = (status) => statusRepositoryMongoDB().add(status);
	const findAll = () => statusRepositoryMongoDB().findAll();
	const updateById = (id, status) => statusRepositoryMongoDB().updateById(id, status);
	const deleteById = (id) => statusRepositoryMongoDB().deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById		
	}
}