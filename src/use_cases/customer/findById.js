import customerGateway from "../../application/customerGateway.js";
const gateway = customerGateway();

export default function findById(id) {
    return gateway.findById(id);
  }
  