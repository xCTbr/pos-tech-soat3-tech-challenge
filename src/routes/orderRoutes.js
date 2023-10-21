import express from "express";
import OrderController from "../controllers/orderController.js";

const routes = express.Router();

routes.get("/order", OrderController.listOrders);
routes.get("/order/:id", OrderController.getOrderById);
routes.post("/order", OrderController.createOrder);
routes.put("/order/:id", OrderController.updateOrder);
routes.delete("/order/:id", OrderController.deleteOrder);

export default routes;
