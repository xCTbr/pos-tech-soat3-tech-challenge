import productGateway from "../../application/productGateway.js";

const gateway = productGateway();
export default function findById(id) {
    return gateway.findById(id);
  }
  