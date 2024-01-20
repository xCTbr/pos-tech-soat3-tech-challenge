export default function customerRepository(repository) {
	const findById = (id) => repository.findById(id);
	const add = (customer) => repository.add(customer);
	const findAll = () => repository.findAll();
	const updateById = (id, customer) => repository.updateById(id, customer);
	const deleteById = (id) => repository.deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById
		
	}
}