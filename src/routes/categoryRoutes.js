/*import express from "express";
import CategoryController from "../controllers/categoryController.js";

const routes = express.Router();

routes.get("/category", CategoryController.listCategories);
routes.get("/category/:id", CategoryController.getCategoryById);
routes.post("/category", CategoryController.createCategory);
routes.put("/category/:id", CategoryController.updateCategory);
routes.delete("/category/:id", CategoryController.deleteCategory);

export default routes;*/


import categoryController from "../controllers/categoryController.js";
import categoryRepository from "../../src/application/repositories/categoryDBRepository.js";
import categoryRepositoryMongoDB from "../frameworks/database/mongoDB/repositories/categoryRepositoryMongoDB.js";


export default function categoryRoutes(express) {
	const router = express.Router();
	const controller = categoryController(
    categoryRepository,
    categoryRepositoryMongoDB
  );

  //GET ENDPOINTS
  router.route('/:id').get(controller.fetchCategoryById);
  router.route('/').get(controller.fetchAllCategory);

  //POST ENDPOINTS
  router.route('/').post(controller.addNewCategory);

  //PUT ENDPOINTS
  router.route('/:id').put(controller.updateCategoryById);

  //DELETE ENDPOINTS
  router.route('/:id').delete(controller.deleteCategoryById);

	return router;
}
