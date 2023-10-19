import mongoose from 'mongoose';
import { productSchema } from './Product';
import { clientSchema } from './Client';
import { statusSchema } from './Status';

const orderSchema = new mongoose.Schema(
	{
		id: {type: String},
		orderNumber: {type: Number, required: true},
		client: clientSchema,
		orderProducts: [productSchema],
		totalOrderPrice: {type: Double, required: true},
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
