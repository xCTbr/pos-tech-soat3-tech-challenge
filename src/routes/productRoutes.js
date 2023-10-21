import express from "express";
import ProductController from "../controllers/productController.js";

const routes = express.Router();

routes.get("/product", ProductController.listProducts);
routes.get("/product/:id", ProductController.getProductById);
routes.post("/product", ProductController.createProduct);
routes.put("/product/:id", ProductController.updateProduct);
routes.delete("/product/:id", ProductController.deleteProduct);

export default routes;
