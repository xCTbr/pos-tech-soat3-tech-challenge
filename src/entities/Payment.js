export default function payment(
    description,
    order,
    status,
    createdAt,
    updatedAt
  ) {
    return {
      getDescription: () => description,
      getOrder: () => order,
      getStatus: () => status,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }