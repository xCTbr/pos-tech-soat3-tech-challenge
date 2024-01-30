import paymentRepositoryMongoDB from "../db/database/mongoDB/repositories/paymentRepositoryMongoDB.js";

//const dbRepository = paymentRepository(paymentRepositoryMongoDB());


//export default function paymentGateway(dbRepository) {
export default function paymentGateway() {
    
	const findById = (id) => paymentRepositoryMongoDB().findById(id);
	const add = (payment) => paymentRepositoryMongoDB().add(payment);
	const findAll = () => paymentRepositoryMongoDB().findAll();
	const updateById = (id, payment) => paymentRepositoryMongoDB().updateById(id, payment);
	//const deleteById = (id) => repository.deleteById(id);

	return {
		findById,
		findAll,
		add,
		updateById,
		//deleteById
		
	}
}