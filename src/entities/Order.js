export default function order(
    orderNumber,
    customer,
    orderProducts, //array of products
    totalOrderPrice,
    orderStatus,
    createdAt,
    updatedAt,
		orderProductsDescription,
  ) {
    return {
      getOrderNumber: () => orderNumber,
      getCustomer: () => customer,
      getOrderProducts: () => orderProducts,
      getTotalOrderPrice: () => totalOrderPrice,
      getOrderStatus: () => orderStatus,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
			getOrderProductsDescription: () => orderProductsDescription,
    };
  }