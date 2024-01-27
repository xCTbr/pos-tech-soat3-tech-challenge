import paymentController from "../controllers/paymentController.js";
//import paymentRepository from "../application/paymentGateway.js";
//import paymentRepositoryMongoDB from "../db/database/mongoDB/repositories/paymentRepositoryMongoDB.js";


export default function paymentRoutes(express) {
	const router = express.Router();
	const controller = paymentController(
    //paymentRepository,
    //paymentRepositoryMongoDB
  );

  router.route('/').get(controller.fetchAllPayment,
    // #swagger.tags = ['Payment']
		// #swagger.description = 'Endpoint to list al
    );

  //POST ENDPOINTS
  router.route('/').post(controller.addNewPayment,
    // #swagger.tags = ['Payment']
		// #swagger.description = 'Endpoint to add a payment.'

		/* #swagger.parameters['newPayment'] = {
               in: 'body',
               description: 'Information payment.',
               required: true,
               schema: { $ref: "#/definitions/AddPayment" }
        } */
		//schema: { $ref: "#/definitions/AddPayment" }
    );

     //PUT ENDPOINTS
  router.route('/:id').put(controller.updatePaymentById,
    // #swagger.tags = ['Payment']
		// #swagger.description = 'Endpoint to update order by ID.'
		
		/* #swagger.parameters['updatePayment'] = {
               in: 'body',
               description: 'Information payment.',
			   required: true,
               schema: { $ref: "#/definitions/updatePayment" }
        } */
    );
  
	return router;
}