export default function order(
    orderNumber,
    customer,
    totalOrderPrice,
    orderStatus,
		orderProductsDescription,
    createdAt,
    updatedAt,
  ) {
    return {
      getOrderNumber: () => orderNumber,
      getCustomer: () => customer,
      getTotalOrderPrice: () => totalOrderPrice,
      getOrderStatus: () => orderStatus,
			getOrderProductsDescription: () => orderProductsDescription,
      getCreatedAt: () => createdAt,
      getUpdatedAt: () => updatedAt,
    };
  }