export default function status(
    description,
    statusName,
    createdAt,
    updatedAt
  ) {
    return {
      getDescription: () => description,
      getStatusName: ()=> statusName,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }