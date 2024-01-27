import category from "../../entities/Category.js";
import categoryGateway from "../../application/categoryGateway.js";

const gateway = categoryGateway();

export default function updateById(
    id,
    categoryName,
    description,
    //createAt,
    updatedAt
) {
    //console.log('Use Case update ->', name);
    
  // validate
  if (!categoryName || !description) {
    //throw new Error('Name and CPF fields are mandatory');
    return Promise.resolve('Category name and Description fields are mandatory');
  }
  const updatedCategory = category(
    categoryName,
    description,
    //createAt,
    updatedAt
  );

  return gateway.findById(id).then((foundCategory) => {
    if (!foundCategory) {
      //throw new Error(`No customer found with id: ${id}`);
      return Promise.resolve(`No category found with id: ${id}`);
    }
    return gateway.updateById(id, updatedCategory);
  });
}
