export default function categoryRepository(repository) {
	const findById = (id) => repository.findById(id);
	const add = (category) => repository.add(category);
	const findAll = () => repository.findAll();
	const updateById = (id, category) => repository.updateById(id, category);
	const deleteById = (id) => repository.deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById
		
	}
}