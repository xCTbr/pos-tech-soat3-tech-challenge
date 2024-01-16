export default function order({
    id,
    orderNumber,
    customer,
    orderProducts, //array of products
    totalOrderPrice,
    orderStatus,
    createdAt,
    updatedAt
  }) {
    return {
      getId: () => id,
      getOrderNumber: () => orderNumber,
      getCustomer: () => customer,
      getOrderProducts: () => orderProducts,
      getTotalOrderPrice: () => totalOrderPrice,
      getOrderStatus: () => orderStatus,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }