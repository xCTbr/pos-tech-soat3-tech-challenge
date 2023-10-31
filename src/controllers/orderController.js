import order from "../models/Order.js";

class OrderController {
	
	static async listOrders(req, res) {
		// #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to list all orders.'
		try {
			const orderList = await order.find()
			.populate('customer','cpf')
			.populate('orderProducts.productID')
			.populate('orderStatus','description');
			
			res.status(200).json(orderList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getOrderById(req, res) {
		// #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to get order by ID.'
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
		// #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to create a order.'
		
		/* #swagger.parameters['createOrder'] = {
               in: 'body',
               description: 'Information order.',
			   required: true,
               schema: { $ref: "#/definitions/AddOrder" }
        } */
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
		// #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to update order by ID.'
		
		/* #swagger.parameters['updateOrder'] = {
               in: 'body',
               description: 'Information order.',
			   required: true,
               schema: { $ref: "#/definitions/AddOrder" }
        } */
		try {
			const id = req.params.id;
			await order.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).json({message: 'Order updated successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Order update failed`
			});
		}
	};

	static async deleteOrder(req, res) {
		try {

		// #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to delete order by ID.'

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
