export default function productRepository(repository) {
	const findById = (id) => repository.findById(id);
	const add = (product) => repository.add(product);
	const findAll = () => repository.findAll();
	const updateById = (id, product) => repository.updateById(id, product);
	const deleteById = (id) => repository.deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById
		
	}
}