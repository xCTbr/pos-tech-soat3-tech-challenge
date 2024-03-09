import customerRepositoryMySqlDB from "../db/database/mySql/repositories/customerRepositoryMySqlDB.js";
export default function customerGateway() {
    
	const findById = (id) => customerRepositoryMySqlDB().findById(id);
	const findByCPF = (cpf) => customerRepositoryMySqlDB().findByCPF(cpf);
	const add = (customer) => customerRepositoryMySqlDB().add(customer);
	const findAll = () => customerRepositoryMySqlDB().findAll();
	const updateById = (id, customer) => customerRepositoryMySqlDB().updateById(id, customer);
	const deleteById = (id) => customerRepositoryMySqlDB().deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById,
		findByCPF		
	}
}