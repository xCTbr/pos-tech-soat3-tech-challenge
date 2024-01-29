import mongoose from 'mongoose';

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
	orderNumber: {type: Number, required: true},
	customer: {type: mongoose.Schema.Types.ObjectId, ref:'customers', required: true},
	//orderProducts: {type : Array , "default":{type: mongoose.Schema.Types.ObjectId, ref:'product'},
	orderProducts: {type: Array, "":[mongoose.Schema.Types.ObjectId], ref: 'product'},
	totalOrderPrice: {type: Number, required: true},
	orderStatus: {type: mongoose.Schema.Types.ObjectId, ref:'status', required: true},
	orderProductsDescription: [{
		productId: {type: mongoose.Schema.Types.ObjectId},
		productDescription: {type: String},
		productPrice: {type: Number},
		productQuantity: {type: Number},
		productTotalPrice: {type: Number},
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