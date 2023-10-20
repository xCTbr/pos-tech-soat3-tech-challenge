import order from "../models/Order";

class OrderController {
	
	static async listOrders(req, res) {
		try {
			const orderList = await order;
			res.status(200).json(orderList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getOrderById(req, res) {
		try {
			const id = req.params.id;
			const orderFound = await order.findById(id);
			res.status(200).json(orderFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async createOrder(req, res) {
		try {
			const newOrder = await order.create(req.body);
			res.status(201).json({
				message: 'Order created successfully',
				order: newOrder
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Order creation failed`
			});
		}
	};

	static async updateOrder(req, res) {
		try {
			const id = req.params.id;
			await order.findByIdAndUpdate(id, req.body);
			res.status(200).json({message: 'Order updated successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Order update failed`
			});
		}
	};

	static async deleteOrder(req, res) {
		try {
			const id = req.params.id;
			await order.findByIdAndDelete(id);
			res.status(200).json({message: 'Order deleted successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Order delete failed`
			});
		}
	};
};

export default OrderController;
