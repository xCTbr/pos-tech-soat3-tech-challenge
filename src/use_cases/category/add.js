import category from "../../entities/Category.js";
import categoryGateway from "../../application/categoryGateway.js";

const gateway = categoryGateway();

export default function createCategory(
    categoryName,
    description,
    createdAt,
    updatedAt
){
		console.log('caso de uso - add category');
    if (!categoryName || !description) {
    //throw new Error('Name and CPF fields cannot be empty');

      return Promise.resolve(`Category Name and Description fields cannot be empty`);
    } 
console.log('caso de uso - add category', description);
    // const newCustomer = customer({id, name, cpf, email, phone, createdAt, updatedAt})
		const newCategory = category(categoryName, description, createdAt, updatedAt)
    //console.log('caso de uso - add category->', newCategory);
    return gateway.add(newCategory);
		// return Promise.resolve('Joia')
}