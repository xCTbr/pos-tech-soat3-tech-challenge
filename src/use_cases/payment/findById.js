import paymentGateway from "../../application/paymentGateway.js";

const gateway = paymentGateway();

export default function findById(id) {
    return gateway.findById(id);
  }
  