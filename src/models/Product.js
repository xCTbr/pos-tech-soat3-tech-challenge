import mongoose from "mongoose";
import { categorySchema } from "./Category";

const productSchema = new mongoose.Schema(
    {
			id: {type: String},
			productName: {type: String, required: true},
			category: categorySchema,
			quantity: {type: Number, required: true},
			price: {type: Double, required: true},
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
const product = mongoose.model('products', productSchema)

export {product, productSchema};
