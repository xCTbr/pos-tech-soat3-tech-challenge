import orderGateway from "../../application/orderGateway.js";

const gateway = orderGateway();

export default function deleteById(id) {
    return gateway.findById(id).then((order) => {
      //console.log('String(order)')
      if (!order || String(order) === 'null') {
        //throw new Error(`No order found with id: ${id}`);
        return Promise.resolve(`No order found with id: ${id}`);
      }
      return gateway.deleteById(id);
    });
  }