/*import express from "express";
import categories from "./categoryRoutes.js";
import orders from "./orderRoutes.js";
import products from "./productRoutes.js";
import status from "./statusRoutes.js";
import customers from "./customerRoutes.js"*/

import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../../swagger-output.json' assert { type: "json" };
import customerRoutes from "./customerRoutes.js";
import customerController from "../controllers/customerController.js";
//import customerRepository from "../application/repositories/customerDbRepository.js";
import customerRepository from "../../src/application/repositories/customerDBRepository.js";
import customerRepositoryMongoDB from "../frameworks/database/mongoDB/repositories/customerRepositoryMongoDB.js";

import bodyParser from "body-parser";

/*const routes = (app) => {
	console.log('routes');
  app.route("/").get((req, res) => res.status(200).send("Sistema de pedidos"));

  // app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
	const controller = customerController(customerRepository, customerRepositoryMongoDB);

 

  app.use('/customer', bodyParser.json(), controller.addNewCustomer)
  app.use('/customer', bodyParser.json(), controller.fetchAllCustomer)

  //app.use('/customer', customerRoutes(express));
  // app.use(express.json(), categories, customers, orders, products, status);
};

export default routes;*/
export default function routes(app, express){
  
  //app.use(express.json());
  //app.use(bodyParser.urlencoded({ extended: true }));
  //app.use(bodyParser.json());
  //app.use(express.urlencoded({ extended: true }))
  // Middleware to parse JSON in the request body
  app.use(bodyParser.json());
  app.use('/customer', customerRoutes(express));

}

