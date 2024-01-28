import useCaseCreate from '../use_cases/order/add.js'
import useCasefindById from '../use_cases/order/findById.js';
import useCasedelete from '../use_cases/order/deleteById.js'
import useCaseupdateById from '../use_cases/order/updateById.js';
import useCaseGetAllOrders from '../use_cases/order/getAll.js';
import useCaseStatusAll from '../use_cases/status/getAll.js';
import addPayment from '../use_cases/payment/addMercadoPago.js';
import useCaseUpdateStatusById from '../use_cases/order/updateStatusById.js';
import { webhookURL } from '../config/webhookConfig.js';

export default function orderController() {
  
	const addNewOrder = async (req, res, next) => {
    const { orderNumber, customer, orderProducts, orderProductsDescription } = req.body;

		// vincular automaticamente o status
		const statusList = await useCaseStatusAll();
		const initialStatus = statusList.find(status => status.description === 'pending' || status.description === 'payment_required');

		//calcular o total do pedido
		const totalOrderPrice = orderProductsDescription.reduce((total, product) => total + product.productTotalPrice, 0);

		// build data payment body
		const itemsList = orderProductsDescription.map(product => {	
			return {
				title: `Produto ${product.productId}`,
				unit_price: product.productPrice,
				quantity: product.productQuantity,
				total_amount: product.productTotalPrice,
				unit_measure: 'unit'
			}
		});

    useCaseCreate(
		orderNumber,
		customer,
		orderProducts,
		totalOrderPrice,
		initialStatus,
		Date(),
		Date(),
		orderProductsDescription
    )
    .then((order) => {
			const data = {
				title: `Order ${orderNumber}-${customer}`,
				description: `Purchase description ${orderNumber}`,
				external_reference: order._id, // Número interno do Pedido dentro da sua loja
				items: itemsList,
				notification_url: webhookURL,
				total_amount: totalOrderPrice
			};
			addPayment(data);
	
			res.json(order)
		})
    .catch((error) => res.json(next(`${error.message} - Order creation failed`)));
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

	const updateStatusById = (req, res, next) => {
		const id = req.params.id;
		const {orderStatus} = req.body;

		useCaseUpdateStatusById(id, orderStatus).then((message) => res.json(message)).catch((error) => next(error));
	};
  //console.log('Controller final',dbRepository);
  return {
		addNewOrder,
    fetchAllOrder,
    fetchOrderById,
    updateOrderById,
    deleteOrderById,
		updateStatusById,
  };
}