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
import orderController from "../controllers/orderController.js";
import orderRepository from "../../src/application/repositories/orderDBRepository.js";
import orderRepositoryMongoDB from "../frameworks/database/mongoDB/repositories/orderRepositoryMongoDB.js";


export default function orderRoutes(express) {
	const router = express.Router();
	const controller = orderController(
    orderRepository,
    orderRepositoryMongoDB
  );

  //GET ENDPOINTS
  router.route('/:id').get(controller.fetchOrderById);
  router.route('/').get(controller.fetchAllOrder);

  //POST ENDPOINTS
  router.route('/').post(controller.addNewOrder);

  //PUT ENDPOINTS
  router.route('/:id').put(controller.updateOrderById);

  //DELETE ENDPOINTS
  router.route('/:id').delete(controller.deleteOrderById);

	return router;
}
