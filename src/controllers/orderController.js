import useCaseCreate from '../use_cases/order/add.js'
import useCasefindById from '../use_cases/order/findById.js';
import useCasedelete from '../use_cases/order/deleteById.js'
import useCaseupdateById from '../use_cases/order/updateById.js';
import useCaseGetAllOrders from '../use_cases/order/getAll.js';
import useCaseStatusAll from '../use_cases/status/getAll.js';
import addPayment from '../use_cases/payment/addMercadoPago.js';
import useCaseUpdateStatusById from '../use_cases/order/updateStatusById.js';
import useCaseGetProductById from '../use_cases/product/findById.js';
import { webhookURL } from '../config/webhookConfig.js';

const getInProgressList = (order) => {
	const statusDoneList = order.filter(order => order.orderStatus?.description === 'done').sort((a, b) => a.createdAt - b.createdAt);
	const statusInProgressList = order.filter(order => order.orderStatus?.description === 'in_progress').sort((a, b) => a.createdAt - b.createdAt);
	const statusReceivedList = order.filter(order => order.orderStatus?.description === 'received').sort((a, b) => a.createdAt - b.createdAt);

	return [...statusDoneList, ...statusInProgressList, ...statusReceivedList]
}

export default function orderController() {
  
	const addNewOrder = async (req, res, next) => {
    const { orderNumber, customer, orderProductsDescription } = req.body;

		// vincular automaticamente o status
		const statusList = await useCaseStatusAll();
		const initialStatus = statusList.find(status => status.description === 'pending' || status.description === 'payment_required');
		
		//build complete product
		// atualiza produtos a partir de orderProducts
		const orderProductsList = await Promise.all(orderProductsDescription.map(async (product) => {
			const productDetails = await useCaseGetProductById(product.productId);
			const { productQuantity } = product;

			return {
				productId: product.productId,
				productPrice: productDetails.price,
				productQuantity: productQuantity,
				productTotalPrice: productDetails.price * productQuantity,
				productName: productDetails.productName
			}
		}));

		
		//calcular o total do pedido
		const totalOrderPrice = orderProductsList.reduce((total, product) => total + product.productTotalPrice, 0);

		// build data payment body
		const itemsList = orderProductsList.map(product => {	
			return {
				title: `Produto ${product.productName} ${product.productId}`,
				unit_price: parseFloat(product.productPrice),
				quantity: product.productQuantity,
				total_amount: product.productTotalPrice,
				unit_measure: 'unit'
			}
		});
		
		// persistir o pedido
		const buildCreateBody = {
			orderNumber,
			customer,
			totalOrderPrice,
			initialStatus: initialStatus.id,
			orderProductsDescription,
		}

    useCaseCreate(
		orderNumber,
		customer,
		totalOrderPrice,
		initialStatus.id,
		orderProductsDescription,
		Date(),
		Date()
    )
    .then(async (order) => {
		
			const data = {
				title: `Order ${orderNumber}-${customer}`,
				description: `Purchase description ${orderNumber}`,
				//external_reference: order._id, // Número interno do Pedido dentro da sua loja
				external_reference: order.orderId.toString(), // Número interno do Pedido dentro da sua loja
				items: itemsList,
				notification_url: webhookURL,
				total_amount: totalOrderPrice
			};
			const qrcode = await addPayment(data);
			res.json({ order, qrcode });
		})
    .catch((error) => res.json(next(`${error} - Order creation failed ---`)));
  };

  const fetchOrderById = (req, res, next) => {
    useCasefindById(req.params.id)
      .then((order) => {
        if (!order) {
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
          res.json(`No order found`);
        }
				if (req.query.list === 'in_progress') {
					const list = getInProgressList(order);
					res.json(list);
				} else {
					res.json(order);
				}
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
  return {
		addNewOrder,
    fetchAllOrder,
    fetchOrderById,
    updateOrderById,
    deleteOrderById,
		updateStatusById,
  };
}
