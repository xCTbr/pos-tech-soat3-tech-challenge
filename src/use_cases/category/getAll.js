export default function getAllCategories(categoryRepository) {
	//console.log(customerRepository);
	return categoryRepository.findAll();
}