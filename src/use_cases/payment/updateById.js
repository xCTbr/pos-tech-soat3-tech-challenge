import payment from "../../entities/Payment.js";
import paymentRepository from "../../application/paymentGateway.js";

const gateway = paymentRepository();

export default function updateById(
    id,
    description,
    status,
    updatedAt
) {
      // validate
      if (!status) {
        //throw new Error('Name and CPF fields are mandatory');
        return Promise.resolve('Status field are mandatory');
      }
      //console.log('status->', status)
      
      
      /*return gateway.findById(id).then((foundPayment) => {
          if (!foundPayment) {
            //throw new Error(`No customer found with id: ${id}`);
            return Promise.resolve(`No payment found with id: ${id}`);
          }
          const updatedPayment = payment(
            description,
            'order',
            status,
            'createdA',
            updatedAt
          );
          //console.log('Use Case update ->', updatedPayment);
          //console.log('found', updatedPayment)
           
          
            
          return gateway.updateById(id, updatedPayment);
          //console.log('retorno update',  updatedPayment)
      });*/

      const updatedPayment = payment(
        description,
        'order',
        status,
        'createdA',
        updatedAt
      );
      //console.log('Use Case update ->', updatedPayment);
      //console.log('found', updatedPayment)
       
      
        
      return gateway.updateById(id, updatedPayment);
  }
