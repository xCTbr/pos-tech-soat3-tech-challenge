import categoryRepositoryMongoDB from "../db/database/mongoDB/repositories/categoryRepositoryMongoDB.js";

export default function categoryGateway() {
    
	const findById = (id) => categoryRepositoryMongoDB().findById(id);
	const add = (category) => categoryRepositoryMongoDB().add(category);
	const findAll = () => categoryRepositoryMongoDB().findAll();
	const updateById = (id, category) => categoryRepositoryMongoDB().updateById(id, category);
	const deleteById = (id) => categoryRepositoryMongoDB().deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById		
	}
}