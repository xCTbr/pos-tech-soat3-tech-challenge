import mongoose from "mongoose";

const statusSchema = new mongoose.Schema(
	{
		id: {type: String},
		description: {type: String, required: true},
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
const status = mongoose.model('status', statusSchema)

export {status, statusSchema};