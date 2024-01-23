//import order from '../../../src/entities/Order';
import order from "../../entities/Order.js";

export default function updateById(
    id,
    orderNumber,
    customer,
    orderProducts, //array of products
    totalOrderPrice,
    orderStatus,
    updatedAt,
    dbRepository
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

  return dbRepository.findById(id).then((foundOrder) => {
    if (!foundOrder) {
      //throw new Error(`No order found with id: ${id}`);
      return Promise.resolve(`No order found with id: ${id}`);
    }
    return dbRepository.updateById(id, updatedOrder);
  });
}
