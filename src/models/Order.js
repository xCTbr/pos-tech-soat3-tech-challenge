import mongoose from 'mongoose';
import { productSchema } from './Product.js';
import { customerSchema } from './Customer.js';
import { statusSchema } from './Status.js';

const orderSchema = new mongoose.Schema(
	{
		id: {type: String},
		orderNumber: {type: Number, required: true},
		customer: customerSchema,
		orderProducts: [productSchema],
		totalOrderPrice: {type: Number, required: true},
		orderStatus: statusSchema,
		createdBy: {type: String, required: true},
		updatedBy: {type: String, required: true},
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
