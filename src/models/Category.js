import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
	{
		id: {type: String},
		categoryName: {type: String, required: true},
		description: {type: String, required: true},
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
const category = mongoose.model('categories', categorySchema)

export {category, categorySchema};
