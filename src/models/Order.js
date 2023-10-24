import mongoose from 'mongoose';
import { productSchema } from './Product.js';
import { customerSchema } from './Customer.js';
import { statusSchema } from './Status.js';

const orderSchema = new mongoose.Schema(
	{
		id: {type: String},
		orderNumber: {type: Number, required: true},
		customer: {type: mongoose.Schema.Types.ObjectId, ref:'customers', required: true},
		//orderProducts: {type : Array , "default":{type: mongoose.Schema.Types.ObjectId, ref:'product'},
		orderProducts: {type: Array, "":[mongoose.Schema.Types.ObjectId], ref: 'products'},
		totalOrderPrice: {type: Number, required: true},
		orderStatus: {type: mongoose.Schema.Types.ObjectId, ref:'status', required: true}
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
)
const order = mongoose.model('orders', orderSchema)

export default order;
