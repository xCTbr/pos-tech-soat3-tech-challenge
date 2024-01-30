import mongoose from 'mongoose';

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;
const StatusSchema = new Schema({
	//statusName: {type: String, required: true},
	description: {type: String, required: true}
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

const StatusModel = mongoose.model('status', StatusSchema);

// UserModel.ensureIndexes((err) => {
//   if (err) {
//     return err;
//   }
//   return true;
// });

export default StatusModel;