import customerGateway from "../../application/customerGateway.js";
const gateway = customerGateway();

export default function findByCPF(cpf) {
    return gateway.findByCPF(cpf);
  }
  