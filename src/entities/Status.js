export default function status(
    description,
    createdAt,
    updatedAt
  ) {
    return {
      getDescription: () => description,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }