import orderGateway from "../../application/orderGateway.js";

const gateway = orderGateway();

export default function findById(id) {
    return gateway.findById(id);
  }
  