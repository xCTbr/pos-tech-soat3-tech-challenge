import categoryGateway from "../../application/categoryGateway.js";

const gateway = categoryGateway();

export default function deleteById(id) {
    return gateway.findById(id).then((category) => {
      //console.log('String(custumer)')
      if (!category || String(category) === 'null') {
        //throw new Error(`No custumer found with id: ${id}`);
        return Promise.resolve(`No category found with id: ${id}`);
      }
      return gateway.deleteById(id);
    });
  }