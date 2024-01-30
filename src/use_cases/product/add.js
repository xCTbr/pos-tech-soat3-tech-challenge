import product from "../../entities/Product.js";
import productGateway from "../../application/productGateway.js";

const gateway = productGateway();

export default function createProduct(
    productName,
    category,
    quantity,
    price,
    createdAt,
    updatedAt
){
		//console.log('caso de uso - add custumer');
    if (!productName || !category || !quantity || !price) {
    //throw new Error('Name and CPF fields cannot be empty');

      return Promise.resolve(`Product Name, Category, Quantity and Price fields cannot be empty`);
    } 

    // const newProduct = product({id, name, cpf, email, phone, createdAt, updatedAt})
		const newProduct = product(productName, category, quantity, price, createdAt, updatedAt)
    
    return gateway.add(newProduct);
		// return Promise.resolve('Joia')
}