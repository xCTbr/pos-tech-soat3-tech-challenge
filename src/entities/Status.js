export default function status({
    id,
    description,
    createdAt,
    updatedAt
  }) {
    return {
      getId: () => id,
      getDescription: () => description,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }