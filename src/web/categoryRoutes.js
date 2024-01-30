import categoryController from "../controllers/categoryController.js";

export default function categoryRoutes(express) {
	const router = express.Router();
	const controller = categoryController();

  //GET ENDPOINTS
  router.route('/').get(controller.fetchAllCategory,
    // #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to list all categories.'
    );
  router.route('/:id').get(controller.fetchCategoryById,
    // #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to get category by ID.'
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
