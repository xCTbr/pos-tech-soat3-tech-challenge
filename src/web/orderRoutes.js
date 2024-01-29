import orderController from "../controllers/orderController.js";

export default function orderRoutes(express) {
	const router = express.Router();
	const controller = orderController();

  //GET ENDPOINTS
  router.route('/').get(controller.fetchAllOrder,
    // #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to list all orders.'

		/* #swagger.parameters['list'] = {
			in: 'query',
			description: 'List all orders according with filter',
			required: false,
			enum: ['all', 'in_progress'],
			default: 'in_progress',
		} */
	);

  router.route('/:id').get(controller.fetchOrderById,
    // #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to get order by ID.'
    );
  //POST ENDPOINTS
  router.route('/').post(controller.addNewOrder,
    // #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to create a order.'
		
		/* #swagger.parameters['createOrder'] = {
               in: 'body',
               description: 'Information order.',
			   required: true,
               schema: { $ref: "#/definitions/AddOrder" }
        } */
    );

  //PUT ENDPOINTS
  router.route('/:id').put(controller.updateOrderById,
    // #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to update order by ID.'
		
		/* #swagger.parameters['updateOrder'] = {
               in: 'body',
               description: 'Information order.',
			   required: true,
               schema: { $ref: "#/definitions/AddOrder" }
        } */
    );

	//PUT ENDPOINTS
	router.route('/statusOrder/:id').put(controller.updateStatusById,
		// #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to update status order by ID.'
		
		/* #swagger.parameters['updateOrder'] = {
								in: 'body',
								description: 'Information order.',
					required: true,
								schema: { $ref: "#/definitions/UpdateOrderStatus" }
				} */
	);

  //DELETE ENDPOINTS
  router.route('/:id').delete(controller.deleteOrderById,
    // #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to delete order by ID.'
    );

	return router;
}
