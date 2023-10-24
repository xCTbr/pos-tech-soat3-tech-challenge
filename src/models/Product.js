import mongoose from "mongoose";
import { categorySchema } from "./Category.js";

const productSchema = new mongoose.Schema(
    {
			id: {type: String},
			productName: {type: String, required: true},
			category: {type: mongoose.Schema.Types.ObjectId, ref:'categories', required: true},
			quantity: {type: Number, required: true},
			price: {type: Number, required: true}
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
const product = mongoose.model('products', productSchema)

export {product, productSchema};
