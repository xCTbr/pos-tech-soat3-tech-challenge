import customerController from "../../controllers/customerController.js";
//import customerRepository from "../application/repositories/customerDbRepository.js";
import customerRepository from "../../../src/application/repositories/customerDBRepository.js";
import customerRepositoryMongoDB from "../../frameworks/database/mongoDB/repositories/customerRepositoryMongoDB.js";


// const routes = express.Router();

// const controller = customerController(customerRepository, customerRepositoryMongoDB);

// routes.post("/customers", controller.addNewCustomer);

// //Rotas da mais especifica para menos especifica, ex: se colocar a chamada de busca de pois de id vai chamar a de id primeiro 
// // routes.get("/customer", CustomerController.listCustomers);
// // routes.get("/customer/cpf", CustomerController.getCustomerByCpf);
// // routes.get("/customer/:id", CustomerController.getCustomerById);
// // routes.post("/customer", CustomerController.createCustomer);
// // routes.put("/customer/:id", CustomerController.updateCustomer);
// // routes.delete("/customer/:id", CustomerController.deleteCustomer);

// export default routes;

export default function customerRoutes(express) {
	const router = express.Router();
	const controller = customerController(
    customerRepository,
    customerRepositoryMongoDB
  );

	// POST enpdpoints
  //router.post('/', controller.addNewCustomer);
  //router.get('/', controller.fetchAllCustomer);

  //const controller = customerController(customerRepository, customerRepositoryMongoDB);

	
  //routes.get("/customer", CustomerController.listCustomers);
  /*router.post('/customer',controller.addNewCustomer)
  router.get('/customer',controller.fetchAllCustomer)*/


 

  //GET ENDPOINTS
  router.route('/').get(controller.fetchAllCustomer,
    // #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to get all customers.'
  /* #swagger.responses[404] = { 
     schema: { msg: "Estadio não encontrado." } 
  } */
  );
  router.route('/:id').get(controller.fetchCustomerById,
    // #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to get customer by ID.'

    );
 
  //POST ENDPOINTS
  router.route('/').post(controller.addNewCustomer,
    // #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to add a customer.'

		/* #swagger.parameters['newCustomer'] = {
               in: 'body',
               description: 'Information customer.',
               required: true,
               schema: { $ref: "#/definitions/AddCustomer" }
        } */
		//schema: { $ref: "#/definitions/AddCustomer" }
    );

  //PUT ENDPOINTS
  router.route('/:id').put(controller.updateCustomerById,
    // #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to update customer by ID.'

		/* #swagger.parameters['updateCustomer'] = {
               in: 'body',
               description: 'Information customer.',
			   required: true,
               schema: { $ref: "#/definitions/AddCustomer" }
        } */
    );

  //DELETE ENDPOINTS
  router.route('/:id').delete(controller.deleteCustomerById,
    // #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to delete customer by ID.'
    );

	return router;
}
