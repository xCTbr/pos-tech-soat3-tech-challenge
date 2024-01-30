import mongoose from 'mongoose';

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
	orderNumber: {type: Number, required: true},
	customer: {type: mongoose.Schema.Types.ObjectId, ref:'customers', required: true},
	totalOrderPrice: {type: Number, required: true},
	orderStatus: {type: mongoose.Schema.Types.ObjectId, ref:'status', required: true},
	orderProductsDescription: [{
		productId: {type: mongoose.Schema.Types.ObjectId, ref:'products', required: true},
		productQuantity: {type: Number, required: true},
	}],
	},
	{
		timestamps: { 
			createdAt: 'createdAt', 
			updatedAt: 'updatedAt' 
		}
	},
	{
		versionKey: false
	}
);

const OrderModel = mongoose.model('orders', OrderSchema);

export default OrderModel;