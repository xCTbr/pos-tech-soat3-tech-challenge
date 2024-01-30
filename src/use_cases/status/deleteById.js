import statusGateway from "../../application/statusGateway.js";

const gateway = statusGateway();

export default function deleteById(id) {
    return gateway.findById(id).then((status) => {
      //console.log('String(custumer)')
      if (!status || String(status) === 'null') {
        //throw new Error(`No custumer found with id: ${id}`);
        return Promise.resolve(`No status found with id: ${id}`);
      }
      return gateway.deleteById(id);
    });
  }