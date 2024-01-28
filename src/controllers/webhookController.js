import { MerchantOrder } from "mercadopago";
import { seller } from "../config/mercadoPagoConfig.js";
import useCaseStatusAll from '../use_cases/status/getAll.js';
import updateStatusById from '../use_cases/order/updateStatusById.js';

export default function webhookController() {

	const webHookHandler = async (req, res, next) => {
		const merchantOrder = new MerchantOrder(seller);
		console.log('webHookHandler, ', req.query);
		const paymentOrder = req.query.id;
		console.log('paymentOrder', paymentOrder);
		if (Object.keys(req.query).length === 0) return res.status(400).json({ message: 'Invalid webhook request. No query params found' });

		const orderStatus = await merchantOrder.get({  merchantOrderId: paymentOrder })
		.then((order) => {
			if (order?.status === 'closed' && order?.order_status === 'paid') {
				return {
					id: order.id,
					status: 'approved',
					internal_order_id: order.external_reference 
				}
			}
			else if (order?.status === 'opened' && order?.order_status === 'payment_required') {
				return {
					id: order.id,
					status: 'pending',
					internal_order_id: order.external_reference 
				}
			}
		})
		.catch((err) => console.log('err ', err));
		console.log('orderStatus with resumo', orderStatus);

		if (orderStatus && orderStatus.status === 'approved') {
			const statusList = await useCaseStatusAll();
			const getStatusReceivedId = statusList.find(status => status.description === 'received');
			updateStatusById(orderStatus.internal_order_id, getStatusReceivedId.id);
		}
	};

	return {
		webHookHandler
	}
}