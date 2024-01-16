export default function categorie({
    id,
    categoryName,
    description,
    createdAt,
    updatedAt
  }) {
    return {
      getId: () => id,
      getCategoryName: () => categoryName,
      getDescription: () => description,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }