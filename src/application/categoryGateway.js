import categoryRepositoryMySqlDB from "../db/database/mySql/repositories/categoryRepositoryMySqlDB.js";

export default function categoryGateway() {
    
	const findById = (id) => categoryRepositoryMySqlDB().findById(id);
	const add = (category) => categoryRepositoryMySqlDB().add(category);
	const findAll = () => categoryRepositoryMySqlDB().findAll();
	const updateById = (id, category) => categoryRepositoryMySqlDB().updateById(id, category);
	const deleteById = (id) => categoryRepositoryMySqlDB().deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById		
	}
}