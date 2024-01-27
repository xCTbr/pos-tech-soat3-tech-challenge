import PaymentModel from "../models/payment.js";

export default function paymentRepositoryMongoDB() {

	const add = async (paymentEntity) => {
	
		console.log('payment repository');
		
		const newPayment = await PaymentModel({
			
			description: paymentEntity.getDescription(),
			order: paymentEntity.getOrder(),
			status: paymentEntity.getStatus(),
			createdAt: new Date()
		})
		
		return newPayment.save();
	};

	const findAll = (params) => PaymentModel.find();
    
	const findById = (id) => PaymentModel.findById(id);

	const deleteById = (id) => PaymentModel.findByIdAndRemove(id);
	
	const updateById_old = (id, paymentEntity) => {
		const updatedPayment = {
			description: paymentEntity.getDescription(),
			//order: paymentEntity.getOrder(),
			status: paymentEntity.getStatus(),
			updatedAt: new Date()
		};
	console.log('payment-->',updatedPayment)
		return PaymentModel.findOneAndUpdate(
		  { _id: id },
		  { $set: updatedPayment },
		  { new: true }
		);
	  };
	  /*
const CPF = req.query.CPF;
			const customerCpfFound = await customer.find({'cpf':CPF},{});
			res.status(200).json(customerCpfFound);
	  */
	  const updateById = (id, paymentEntity) => {
		const updatedPayment = {
			description: paymentEntity.getDescription(),
			//order: paymentEntity.getOrder(),
			status: paymentEntity.getStatus(),
			updatedAt: new Date()
		};
	console.log('payment-->',updatedPayment)
		return PaymentModel.findOneAndUpdate(
		  { 'order': id },
		  { $set: updatedPayment },
		  { new: false }
		);
	  };

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById
		
	}
}
