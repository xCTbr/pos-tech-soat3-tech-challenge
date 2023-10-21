import express from "express";
import categories from "./categoryRoutes.js";
import customers from "./customerRoutes.js";
import orders from "./orderRoutes.js";
import products from "./productRoutes.js";
import status from "./statusRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Sistema de pedidos"));

  app.use(express.json(), categories, customers, orders, products, status);
};

export default routes;
