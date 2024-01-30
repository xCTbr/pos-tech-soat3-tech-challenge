import productGateway from "../../application/productGateway.js";

const gateway = productGateway();

export default function deleteById(id) {
    return gateway.findById(id).then((product) => {
      //console.log('String(product)')
      if (!product || String(product) === 'null') {
        //throw new Error(`No product found with id: ${id}`);
        return Promise.resolve(`No product found with id: ${id}`);
      }
      return gateway.deleteById(id);
    });
  }