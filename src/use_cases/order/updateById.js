import order from "../../entities/Order.js";
import orderGateway from "../../application/orderGateway.js";

const gateway = orderGateway();

export default function updateById(
    id,
    orderNumber,
    customer,
    orderProducts, //array of products
    totalOrderPrice,
    orderStatus,
    updatedAt
) {
    //console.log('Use Case update ->', name);
    
  // validate
  if (!orderNumber || !customer || !orderProducts || !totalOrderPrice || !orderStatus) {
    //throw new Error('Name and CPF fields are mandatory');
    return Promise.resolve('Order Number, Customer, Total Order Price and Order Status fields are mandatory');
  }
  const updatedOrder = order(
    orderNumber,
    customer,
    orderProducts, //array of products
    totalOrderPrice,
    orderStatus,
    updatedAt,
  );

  return gateway.findById(id).then((foundOrder) => {
    if (!foundOrder) {
      //throw new Error(`No order found with id: ${id}`);
      return Promise.resolve(`No order found with id: ${id}`);
    }
    return gateway.updateById(id, updatedOrder);
  });
}
