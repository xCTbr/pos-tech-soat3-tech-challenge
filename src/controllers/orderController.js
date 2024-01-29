import useCaseCreate from '../use_cases/order/add.js'
import useCasefindById from '../use_cases/order/findById.js';
import useCasedelete from '../use_cases/order/deleteById.js'
import useCaseupdateById from '../use_cases/order/updateById.js';
import useCaseGetAllOrders from '../use_cases/order/getAll.js';

export default function orderController() {
  
	const addNewOrder = (req, res, next) => {
		console.log('controller order');
    //console.log('repositorio-> ',dbRepository);
		//console.log('Request body:', req.body);
    const { orderNumber, customer, orderProducts, totalOrderPrice, orderStatus} = req.body;

    useCaseCreate(
		orderNumber,
		customer,
		orderProducts,
		totalOrderPrice,
		orderStatus,
		Date(),
		Date()
    )
    .then((order) => res.json(order))
    .catch((error) => res.json(next(`${error.message} - Order creation failed`)));
		/*.then((order) => {
			return res.json('Order created successfully');
		})
		.catch((error) => res.json(`${error.message} - Order creation failed`));*/
  };

  const fetchOrderById = (req, res, next) => {
    //console.log('params by id-> ',req.params.id);
    //console.log('repository -> ',dbRepository);
    useCasefindById(req.params.id)
      .then((order) => {
        if (!order) {
          //throw new Error(`No order found with id: ${req.params.id}`);
          res.json(`No order found with id: ${req.params.id}`);
        }
        res.json(order);
      })
      .catch((error) => next(error));
  };

  const fetchAllOrder = (req, res, next) => {
    useCaseGetAllOrders( )
      .then((order) => {
        if (!order) {
          //throw new Error(`No orders found with id: ${req.params.id}`);
          res.json(`No order found`);
        }
        res.json(order);
      })
      .catch((error) => next(error));
  };

  const deleteOrderById = (req, res, next) => {
    useCasedelete(req.params.id)
      .then(() => res.json('Order sucessfully deleted!'))
      .catch((error) => next(error));
  };
  
  const updateOrderById = (req, res, next) => {
    const {orderNumber, customer, orderProducts, totalOrderPrice, orderStatus} = req.body;

    //console.log('controller update by id->',dbRepository);
    useCaseupdateById(
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
      
  };
  //console.log('Controller final',dbRepository);
  return {
	addNewOrder,
    fetchAllOrder,
    fetchOrderById,
    updateOrderById,
    deleteOrderById
  };
}