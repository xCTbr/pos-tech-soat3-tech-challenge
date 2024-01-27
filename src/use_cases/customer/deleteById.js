import customerGateway from "../../application/customerGateway.js";
const gateway = customerGateway();

export default function deleteById(id) {
    return gateway.findById(id).then((customer) => {
      //console.log('String(custumer)')
      if (!customer || String(customer) === 'null') {
        //throw new Error(`No custumer found with id: ${id}`);
        return Promise.resolve(`No customer found with id: ${id}`);
      }
      return gateway.deleteById(id);
    });
  }