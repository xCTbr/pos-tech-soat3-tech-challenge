export default function getAllCustomers(customerRepository) {
	console.log(customerRepository);
	return customerRepository.findAll();
}