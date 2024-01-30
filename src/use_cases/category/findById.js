import categoryGateway from "../../application/categoryGateway.js";

const gateway = categoryGateway();

export default function findById(id) {
    return gateway.findById(id);
  }
  