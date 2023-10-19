import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
	{
		id: {type: String},
		name: {type: String, required: true},
		cpf: {type: String, required: true},
		email: {type: String, required: true},
		phone: {type: String, required: true},
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
const client = mongoose.model('clients', clientSchema)

export {client, clientSchema};