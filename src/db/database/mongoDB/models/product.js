import mongoose from 'mongoose';

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
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
);

// UserSchema.index({ role: 1 });

const ProductModel = mongoose.model('product', ProductSchema);

// UserModel.ensureIndexes((err) => {
//   if (err) {
//     return err;
//   }
//   return true;
// });

export default ProductModel;