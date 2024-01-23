import order from "../../entities/Order.js";

export default function createOrder(
    orderNumber,
    customer,
    orderProducts, //array of products
    totalOrderPrice,
    orderStatus,
    createdAt,
    updatedAt,
    dbRepository
){
		//console.log('caso de uso - add custumer');
    if (!orderNumber || !customer || !orderProducts || !totalOrderPrice || !orderStatus) {
    //throw new Error('Name and CPF fields cannot be empty');

      return Promise.resolve(`Order Number, Customer, Total Order Price and Order Status fields cannot be empty`);
    } 

    // const newOrder = order({id, name, cpf, email, phone, createdAt, updatedAt})
		const newOrder = order(orderNumber, customer, orderProducts, totalOrderPrice, orderStatus, createdAt, updatedAt)
    
    return dbRepository.add(newOrder);
		// return Promise.resolve('Joia')
}