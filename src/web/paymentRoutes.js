import paymentController from "../controllers/paymentController.js";

export default function paymentRoutes(express) {
	const router = express.Router();
	const controller = paymentController();

  router.route('/').get(controller.fetchAllPayment,
    // swagger.tags = ['Payment']
		// swagger.description = 'Endpoint to list al
    );

  //POST ENDPOINTS
  router.route('/').post(controller.addNewPayment,
    // swagger.tags = ['Payment']
		// swagger.description = 'Endpoint to add a payment.'

		/* swagger.parameters['newPayment'] = {
               in: 'body',
               description: 'Information payment.',
               required: true,
               schema: { $ref: "#/definitions/AddPayment" }
        } */
		//schema: { $ref: "#/definitions/AddPayment" }
    );

     //PUT ENDPOINTS
  router.route('/:orderid').put(controller.updatePaymentById,
    // swagger.tags = ['Payment']
		// swagger.description = 'Endpoint to update order by ID ORDER.'
		
		/* swagger.parameters['updatePayment'] = {
               in: 'body',
               description: 'Information payment.',
			   required: true,
               schema: { $ref: "#/definitions/updatePayment" }
        } */
    );
  
	return router;
}