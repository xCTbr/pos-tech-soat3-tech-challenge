/*import express from "express";
import CategoryController from "../controllers/categoryController.js";

const routes = express.Router();

routes.get("/category", CategoryController.listCategories);
routes.get("/category/:id", CategoryController.getCategoryById);
routes.post("/category", CategoryController.createCategory);
routes.put("/category/:id", CategoryController.updateCategory);
routes.delete("/category/:id", CategoryController.deleteCategory);

export default routes;*/


import categoryController from "../../controllers/categoryController.js";
import categoryRepository from "../../../src/application/repositories/categoryDBRepository.js";
import categoryRepositoryMongoDB from "../../frameworks/database/mongoDB/repositories/categoryRepositoryMongoDB.js";


export default function categoryRoutes(express) {
	const router = express.Router();
	const controller = categoryController(
    categoryRepository,
    categoryRepositoryMongoDB
  );

  //GET ENDPOINTS
  router.route('/:id').get(controller.fetchCategoryById,
    // #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to get category by ID.'
    );
  router.route('/').get(controller.fetchAllCategory,
    // #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to list all categories.'
    );

  //POST ENDPOINTS
  router.route('/').post(controller.addNewCategory,
    // #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to add category.'

		/* #swagger.parameters['newCategory'] = {
               in: 'body',
               description: 'Information category.',
               required: true,
               schema: { $ref: "#/definitions/AddCategory" }
        } */
    );

  //PUT ENDPOINTS
  router.route('/:id').put(controller.updateCategoryById,
    // #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to update customer by ID.'

		/* #swagger.parameters['updateCategory'] = {
               in: 'body',
               description: 'Information do category.',
               required: true,
               schema: { $ref: "#/definitions/AddCategory" }
        } */
    );

  //DELETE ENDPOINTS
  router.route('/:id').delete(controller.deleteCategoryById,
    // #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to delete category by ID.'
    );

	return router;
}
