import express from "express";
import CustomerController from "../controllers/customerController.js";

const routes = express.Router();

routes.get("/customer", CustomerController.listCustomers);
routes.get("/customer/:id", CustomerController.getCustomerById);
routes.post("/customer", CustomerController.createCustomer);
routes.put("/customer/:id", CustomerController.updateCustomer);
routes.delete("/customer/:id", CustomerController.deleteCustomer);

export default routes;
