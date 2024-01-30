export default function product(
    productName,
    category,
    quantity,
    price,
    createdAt,
    updatedAt
  ) {
    return {
      getProductName: () => productName,
      getCategory: () => category,
      getQuantity: () => quantity,
      getPrice: () => price,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }




  