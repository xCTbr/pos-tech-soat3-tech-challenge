import product from "../../entities/Product.js";

export default function createProduct(
    productName,
    category,
    quantity,
    price,
    createdAt,
    updatedAt,
    dbRepository
){
		//console.log('caso de uso - add custumer');
    if (!productName || !category || !quantity || !price) {
    //throw new Error('Name and CPF fields cannot be empty');

      return Promise.resolve(`Product Name, Category, Quantity and Price fields cannot be empty`);
    } 

    // const newProduct = product({id, name, cpf, email, phone, createdAt, updatedAt})
		const newProduct = product(productName, category, quantity, price, createdAt, updatedAt)
    
    return dbRepository.add(newProduct);
		// return Promise.resolve('Joia')
}