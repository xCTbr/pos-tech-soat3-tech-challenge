import status from "../../entities/Status.js";
import statusGateway from "../../application/statusGateway.js";

const gateway = statusGateway();

export default function updateById(
    id,
    statusName,
    description,
    //createAt,
    updatedAt
) {
    //console.log('Use Case update ->', name);
    
  // validate
  if (!statusName || !description) {
    //throw new Error('Name and CPF fields are mandatory');
    return Promise.resolve('Status name and Description fields are mandatory');
  }
  const updatedStatus = status(
    statusName,
    description,
    //createAt,
    updatedAt
  );

  return gateway.findById(id).then((foundStatus) => {
    if (!foundStatus) {
      //throw new Error(`No customer found with id: ${id}`);
      return Promise.resolve(`No status found with id: ${id}`);
    }
    return gateway.updateById(id, updatedStatus);
  });
}
