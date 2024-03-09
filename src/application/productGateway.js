import productRepositoryMySqlDB from "../db/database/mySql/repositories/productRepositoryMySqlDB.js";

export default function productGateway() {
    
	const findById = (id) => productRepositoryMySqlDB().findById(id);
	const add = (product) => productRepositoryMySqlDB().add(product);
	const findAll = () => productRepositoryMySqlDB().findAll();
	const updateById = (id, product) => productRepositoryMySqlDB().updateById(id, product);
	const deleteById = (id) => productRepositoryMySqlDB().deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById		
	}
}