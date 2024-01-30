import productController from "../controllers/productController.js";



export default function productRoutes(express) {
	const router = express.Router();
	const controller = productController();

  //GET ENDPOINTS
  router.route('/').get(controller.fetchAllProduct,
    // #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to get all products.'
    );

  router.route('/:id').get(controller.fetchProductById,
    // #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to get product by ID.'
    );

  //POST ENDPOINTS
  router.route('/').post(controller.addNewProduct,
    // #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to add product.'

		/* #swagger.parameters['newProduct'] = {
               in: 'body',
               description: 'Information product.',
               required: true,
               schema: { $ref: "#/definitions/AddProduct" }
        } */
		//schema: { $ref: "#/definitions/AddProduct" }
    );

  //PUT ENDPOINTS
  router.route('/:id').put(controller.updateProductById,
    // #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to update product by ID.'

		/* #swagger.parameters['updateProduct'] = {
               in: 'body',
               description: 'Information customer.',
			   required: true,
               schema: { $ref: "#/definitions/AddProduct" }
        } */
    );

  //DELETE ENDPOINTS
  router.route('/:id').delete(controller.deleteProductById,
    // #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to delete product by ID.'
    );

	return router;
}
