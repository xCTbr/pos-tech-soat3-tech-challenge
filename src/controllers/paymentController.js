import useCaseCreate from '../use_cases/payment/add.js'
import useCasegetAll from '../use_cases/payment/getAll.js'
import useCaseUpdateById from '../use_cases/payment/updateById.js'


export default function paymentController() {
  
	const addNewPayment = (req, res, next) => {
		console.log('controller payment');
    //console.log('repositorio-> ',dbRepository);
		//console.log('Request body:', req.body);
    const { description, order, status } = req.body;

    useCaseCreate(
			description,
      order,
      status,
      Date(),
      Date()//,
      //dbRepository
      )
      .then((payment) => res.json(payment))
      .catch((error) => res.json(next(`${error.message} - payment creation failed`)));
    };

  const fetchAllPayment = (req, res, next) => {
    useCasegetAll( )
    //useCasegetAll( )
      .then((payment) => {
        if (!payment) {
          //throw new Error(`No payments found with id: ${req.params.id}`);
          res.json(`No payment found`);
        }
        res.json(payment);
      })
      .catch((error) => next(error));
  };
  const updatePaymentById = (req, res, next) => {
    const {description,status} = req.body;

    const id = req.params.orderid;
    console.log('controller update by id->',req.body);
    useCaseUpdateById(
      id,
      description,
      status,
      Date()
    )
      .then((message) => {
       // console.log('message',message)
        /*if (status === 'Done') {
           //return res.json(`atualiza order`);
            // inicio update
            
            usecaseUpdateOrder(
              req.params.id,
              orderNumber,
              customer,
              orderProducts,
              totalOrderPrice,
              orderStatus,
              Date()
              )
                .then((message) => res.json(message))
                .catch((error) => next(error));
                

            //fim update
        }*/
        
      
          //console.log('pay',req.body)
          //res.json(payment)
        
        return res.json(message)
      })
         
      .catch((error) => next(res.status(400).json(`Fail to update : ${error}`)));
  };
  //console.log('Controller final',useCaseUpdateById);
  return {
		addNewPayment,
    fetchAllPayment,
    updatePaymentById
    
  };
}