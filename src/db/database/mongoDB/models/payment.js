import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const PaymentSchema = new Schema({
        description: {type: String, required: true},
        //email: {type: String, required: true},
        //payment_method_id: {type: String, required: true},
        order: {type: mongoose.Schema.Types.ObjectId, ref:'orders', required: true},
        status: {type: String, required: true},
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

const PaymentModel = mongoose.model('payments', PaymentSchema);

export default PaymentModel;