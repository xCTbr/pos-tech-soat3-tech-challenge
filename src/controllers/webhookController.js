import { MerchantOrder } from "mercadopago";
import { seller } from "../config/mercadoPagoConfig.js";
import useCaseStatusAll from '../use_cases/status/getAll.js';
import updateStatusById from '../use_cases/order/updateStatusById.js';

export default function webhookController() {

	const webHookHandler = async (req, res, next) => {
		const merchantOrder = new MerchantOrder(seller);
		console.log('webHookHandler, ', req.query);
		const paymentOrder = req.query.id || req.query.data_id;
		console.log('paymentOrder', paymentOrder);

		// if (paymentOrder) {
		// 	const orderStatus = await merchantOrder.get({  merchantOrderId: paymentOrder })
		// 	.then((order) => {
		// 		if (order.status === 'closed' && order.order_status === 'paid') {
		// 			return {
		// 				id: order.id,
		// 				status: 'approved',
		// 				internal_order_id: order.external_reference 
		// 			}
		// 		}
		// 		else if (order.status === 'opened' && order.order_status === 'payment_required') {
		// 			return {
		// 				id: order.id,
		// 				status: 'pending',
		// 				internal_order_id: order.external_reference 
		// 			}
		// 		}
		// 	})
		// 	.catch(console.log);

		// 	console.log('orderStatus', orderStatus); // return orderStatus
		// 	// in another place add following code to update order

		// 	// vincular automaticamente o status quando recebe notificacao de que foi pago
		// 	const statusList = await useCaseStatusAll();
		// 	const updatedStatus = statusList.find(status => status.description === 'received');
		// 	console.log('updatedStatus', updatedStatus);

		// 	if (orderStatus.status === 'approved') {
		// 		updateStatusById(orderStatus.internal_order_id, updatedStatus.id, Date());
		// 	}
		// }
	};

	return {
		webHookHandler
	}
}