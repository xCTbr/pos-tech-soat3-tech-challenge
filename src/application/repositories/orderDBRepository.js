export default function orderRepository(repository) {
	const findById = (id) => repository.findById(id);
	const add = (order) => repository.add(order);
	const findAll = () => repository.findAll();
	const updateById = (id, order) => repository.updateById(id, order);
	const deleteById = (id) => repository.deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById
		
	}
}