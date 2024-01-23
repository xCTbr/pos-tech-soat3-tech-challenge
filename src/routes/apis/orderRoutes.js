/*import express from "express";
import OrderController from "../controllers/orderController.js";

const routes = express.Router();

routes.get("/order", OrderController.listOrders);
routes.get("/order/:id", OrderController.getOrderById);
routes.post("/order", OrderController.createOrder);
routes.put("/order/:id", OrderController.updateOrder);
routes.delete("/order/:id", OrderController.deleteOrder);

export default routes;
*/
import orderController from "../../controllers/orderController.js";
import orderRepository from "../../../src/application/repositories/orderDBRepository.js";
import orderRepositoryMongoDB from "../../frameworks/database/mongoDB/repositories/orderRepositoryMongoDB.js";


export default function orderRoutes(express) {
	const router = express.Router();
	const controller = orderController(
    orderRepository,
    orderRepositoryMongoDB
  );

  //GET ENDPOINTS
  router.route('/:id').get(controller.fetchOrderById,
    // #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to get order by ID.'
    );
  router.route('/').get(controller.fetchAllOrder,
    // #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to list al
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

  //DELETE ENDPOINTS
  router.route('/:id').delete(controller.deleteOrderById,
    // #swagger.tags = ['Order']
		// #swagger.description = 'Endpoint to delete order by ID.'
    );

	return router;
}
