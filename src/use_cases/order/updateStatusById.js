import order from "../../entities/Order.js";
import orderGateway from "../../application/orderGateway.js";

const gateway = orderGateway();

export default function updateStatusById(
    id,
    orderStatus,
    updatedAt
) {
    
  // validate
  if (!id || !orderStatus) {
    //throw new Error('Name and CPF fields are mandatory');
    return Promise.resolve('Order Id and new status are mandatory');
  }
  const updatedOrder = order(
    orderStatus,
    updatedAt,
  );

  return gateway.findById(id).then((foundOrder) => {
    if (!foundOrder) {
      //throw new Error(`No order found with id: ${id}`);
      return Promise.resolve(`No order found with id: ${id}`);
    }
    return gateway.updateStatusById(id, orderStatus);
  });
}