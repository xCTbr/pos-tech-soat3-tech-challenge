// import mongoose from "mongoose";

// const customerSchema = new mongoose.Schema(
// 	{
// 		id: {type: String},
// 		name: {type: String, required: true},
// 		cpf: {type: String, required: true},
// 		email: {type: String, required: true},
// 		phone: {type: String, required: true},
// 	},
// 	{
// 		timestamps: { 
// 			createdAt: 'createdAt', 
// 			updatedAt: 'updatedAt' 
// 		}
// 	},
// 	{
// 		versionKey: false
// 	}
// )
// const customer = mongoose.model('customers', customerSchema)

// export { customer, customerSchema };
import mongoose from 'mongoose';

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
		// id: {type: String},
		name: {type: String, required: true},
		cpf: {type: String, required: true},
		email: {type: String, required: true},
		phone: {type: String, required: true},
		skype: {type: String, required: true},
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

// UserSchema.index({ role: 1 });

const CustomerModel = mongoose.model('customers', CustomerSchema);

// UserModel.ensureIndexes((err) => {
//   if (err) {
//     return err;
//   }
//   return true;
// });

export default CustomerModel;