export default function getAllProducts(productRepository) {
	//console.log(productRepository);
	return productRepository.findAll();
}