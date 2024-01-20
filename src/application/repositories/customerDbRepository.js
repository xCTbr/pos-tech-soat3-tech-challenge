export default function customerRepository(repository) {
	const add = (user) => repository.add(user);
	const findAll = () => repository.findAll();

	return {
		add,
		findAll
	}
}