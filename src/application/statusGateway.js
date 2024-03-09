import statusRepositoryMySqlDB from "../db/database/mySql/repositories/statusRepositoryMySqlDB.js";

export default function statusGateway() {
    
	const findById = (id) => statusRepositoryMySqlDB().findById(id);
	const add = (status) => statusRepositoryMySqlDB().add(status);
	const findAll = () => statusRepositoryMySqlDB().findAll();
	const updateById = (id, status) => statusRepositoryMySqlDB().updateById(id, status);
	const deleteById = (id) => statusRepositoryMySqlDB().deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById		
	}
}