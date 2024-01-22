export default function category(
    categoryName,
    description,
    createdAt,
    updatedAt
  ) {
    return {
      getCategoryName: () => categoryName,
      getDescription: () => description,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }