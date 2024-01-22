/*import express from "express";
import ProductController from "../controllers/productController.js";

const routes = express.Router();

routes.get("/product", ProductController.listProducts);
routes.get("/product/:id", ProductController.getProductById);
routes.post("/product", ProductController.createProduct);
routes.put("/product/:id", ProductController.updateProduct);
routes.delete("/product/:id", ProductController.deleteProduct);

export default routes;*/

import productController from "../controllers/productController.js";
import productRepository from "../../src/application/repositories/productDBRepository.js";
import productRepositoryMongoDB from "../frameworks/database/mongoDB/repositories/productRepositoryMongoDB.js";


export default function productRoutes(express) {
	const router = express.Router();
	const controller = productController(
    productRepository,
    productRepositoryMongoDB
  );

  //GET ENDPOINTS
  router.route('/:id').get(controller.fetchProductById);
  router.route('/').get(controller.fetchAllProduct);

  //POST ENDPOINTS
  router.route('/').post(controller.addNewProduct);

  //PUT ENDPOINTS
  router.route('/:id').put(controller.updateProductById);

  //DELETE ENDPOINTS
  router.route('/:id').delete(controller.deleteProductById);

	return router;
}
