export default function customer(
    name,
    cpf,
    email,
    phone,
    createdAt,
    updatedAt
  ) {
    return {
      getName: () => name,
      getCpf: () => cpf,
      getEmail: () => email,
      getPhone: () => phone,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }