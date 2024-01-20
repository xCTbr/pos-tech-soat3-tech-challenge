export default function product({
    id,
    productName,
    category,
    quantity,
    price,
    createdAt,
    updatedAt
  }) {
    return {
      getIdProduct: () => idProduct,
      getProductName: () => productName,
      getCategory: () => category,
      getQuantity: () => quantity,
      getPrice: () => price,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }




  