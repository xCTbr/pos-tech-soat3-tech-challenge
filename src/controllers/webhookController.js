import { MerchantOrder } from "mercadopago";
import { seller } from "../config/mercadoPagoConfig.js";
import useCaseStatusAll from '../use_cases/status/getAll.js';
import updateStatusById from '../use_cases/order/updateStatusById.js';

const getOrderStatus = (order) => {
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
}

const getStatusId = async (status) => {
	const statusList = await useCaseStatusAll();
	const getStatusReceivedId = statusList.find(status => status.description === 'received');
	return getStatusReceivedId;
}

export default function webhookController() {
	const webHookHandler = async (req, res, next) => {
		const merchantOrder = new MerchantOrder(seller);

		const { id, topic } = req.query;
		const paymentOrder = req.query.id;
		if (Object.keys(req.query).length === 0) return res.status(400).json({ message: 'Invalid webhook request. No query params found' });

		if ( paymentOrder && topic === 'merchant_order') {
			const orderStatus = await merchantOrder.get({  merchantOrderId: paymentOrder })
			.then((order) => {
				return getOrderStatus(order);
			})
			.catch((err) => console.log('err >>>>> ', err));


			if (orderStatus && orderStatus.status === 'approved') {
				const getStatusReceivedId = await getStatusId('received');
				const result = await updateStatusById(orderStatus.internal_order_id, getStatusReceivedId.id);
			}
		} else {
			res.status(400).json({ message: 'Invalid operation' });
		}
	};

	return {
		webHookHandler
	}
}