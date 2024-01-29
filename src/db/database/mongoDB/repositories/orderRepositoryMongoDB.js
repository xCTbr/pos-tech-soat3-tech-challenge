import OrderModel from "../models/order.js";

export default function orderRepositoryMongoDB() {

	const add = async (orderEntity) => {
	
		const newOrder = await OrderModel({
			orderNumber: orderEntity.getOrderNumber(),
			customer: orderEntity.getCustomer(),
			// orderProducts: orderEntity.getOrderProducts(),
			totalOrderPrice: orderEntity.getTotalOrderPrice(),
			orderStatus: orderEntity.getOrderStatus(),
			orderProductsDescription: orderEntity.getOrderProductsDescription(),
			createdAt: new Date(),
		})
		
		return newOrder.save();
	};

	const findAll = (params) => OrderModel.find().populate('orderStatus').populate('customer');
    
	const findById = (id) => OrderModel.findById(id).populate('orderStatus').populate('customer');

	const deleteById = (id) => OrderModel.findByIdAndRemove(id);
	
	const updateById = (id, orderEntity) => {
		const updatedOrder = {
			orderNumber: orderEntity.getOrderNumber(),
			customer: orderEntity.getCustomer(),
			// orderProducts: orderEntity.getOrderProducts(),
			totalOrderPrice: orderEntity.getTotalOrderPrice(),
			orderStatus: orderEntity.getOrderStatus(),
			orderProductsDescription: orderEntity.getOrderProductsDescription(),
			updatedAt: new Date()
		};
	
		return OrderModel.findOneAndUpdate(
		  { _id: id },
		  { $set: updatedOrder },
		  { new: true }
		);
	};

	const updateStatusById = (id, status) => {
		const updatedOrder = {
			orderStatus: status,
			updatedAt: new Date()
		};
	
		return OrderModel.findOneAndUpdate(
			{ _id: id },
			{ $set: updatedOrder },
			{ new: true }
		);
	};

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById,
		updateStatusById		
	}
}
