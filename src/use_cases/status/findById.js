import statusGateway from "../../application/statusGateway.js";

const gateway = statusGateway();

export default function findById(id) {
    return gateway.findById(id);
  }
  