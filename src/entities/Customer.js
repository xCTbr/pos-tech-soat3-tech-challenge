export default function customer({
	customerId,
	name,
	cpf,
	email,
	phone,
	createdAt,
	updatedAt
}) {
	return {
		getName: () => name,
		getCpf: () => cpf,
		getEmail: () => email,
		getPhone: () => phone,
		getCustomerId: () => customerId,
		getCreatedAt: () => createdAt,
		getUpdatedAt: () => updatedAt,
	};
}
