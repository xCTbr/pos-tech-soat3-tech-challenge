export default function customer({
    name,
    cpf,
    email,
    phone,
		skype,
    createdAt,
    updatedAt
  }) {
    return {
      getName: () => name,
      getCpf: () => cpf,
      getEmail: () => email,
      getPhone: () => phone,
			getSkype: () => skype,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }