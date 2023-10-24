import express from "express";
import CustomerController from "../controllers/customerController.js";

const routes = express.Router();

//Rotas da mais especifica para menos especifica, ex: se colocar a chamada de busca de pois de id vai chamar a de id primeiro 
routes.get("/customer", CustomerController.listCustomers);
routes.get("/customer/cpf", CustomerController.getCustomerByCpf);
routes.get("/customer/:id", CustomerController.getCustomerById);
routes.post("/customer", CustomerController.createCustomer);
routes.put("/customer/:id", CustomerController.updateCustomer);
routes.delete("/customer/:id", CustomerController.deleteCustomer);

export default routes;
