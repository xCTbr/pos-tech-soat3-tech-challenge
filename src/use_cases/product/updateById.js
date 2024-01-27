//import product from '../../../src/entities/Product';
import product from "../../entities/Product.js";
import productGateway from "../../application/productGateway.js";

const gateway = productGateway();

export default function updateById(
    id,
    productName,
    category,
    quantity,
    price,
    updatedAt
) {
    //console.log('Use Case update ->', name);
    
  // validate
  if (!productName || !category || !quantity || !price) {
    //throw new Error('Name and CPF fields are mandatory');
    return Promise.resolve('Product Name, Category, Quantity and Price fields are mandatory');
  }
  const updatedProduct = product(
    productName,
    category,
    quantity,
    price,
    updatedAt
  );

  return gateway.findById(id).then((foundProduct) => {
    if (!foundProduct) {
      //throw new Error(`No product found with id: ${id}`);
      return Promise.resolve(`No product found with id: ${id}`);
    }
    return gateway.updateById(id, updatedProduct);
  });
}
