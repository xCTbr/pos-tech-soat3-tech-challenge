import swaggerUI from 'swagger-ui-express';
import swaggerFile from '../../swagger-output.json' assert { type: "json" };
import customerRoutes from "./customerRoutes.js";
import categoryRoutes from './categoryRoutes.js';
import productRoutes from './productRoutes.js';
import orderRoutes from './orderRoutes.js';
import paymentRoutes from './paymentRoutes.js';
import statusRoutes from './statusRoutes.js';

import bodyParser from "body-parser";

export default function routes(app, express){
  
  //app.use(express.json());
  //app.use(bodyParser.urlencoded({ extended: true }));
  //app.use(bodyParser.json());
  //app.use(express.urlencoded({ extended: true }))
  // Middleware to parse JSON in the request body
  app.use(bodyParser.json());
  app.use('/customer', customerRoutes(express));
  app.use('/category', categoryRoutes(express));
  app.use('/product', productRoutes(express));
  app.use('/status', statusRoutes(express));
  app.use('/order', orderRoutes(express));
  app.use('/payment', paymentRoutes(express));

  //app.route("/").get((req, res) => res.status(200).send("Sistema de pedidos"));

  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
}

