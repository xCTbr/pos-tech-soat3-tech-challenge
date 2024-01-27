import productRepositoryMongoDB from "../db/database/mongoDB/repositories/productRepositoryMongoDB.js";

export default function productGateway() {
    
	const findById = (id) => productRepositoryMongoDB().findById(id);
	const add = (product) => productRepositoryMongoDB().add(product);
	const findAll = () => productRepositoryMongoDB().findAll();
	const updateById = (id, product) => productRepositoryMongoDB().updateById(id, product);
	const deleteById = (id) => productRepositoryMongoDB().deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById		
	}
}