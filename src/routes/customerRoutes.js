import customerController from "../controllers/customerController.js";
//import customerRepository from "../application/repositories/customerDbRepository.js";
import customerRepository from "../../src/application/repositories/customerDBRepository.js";
import customerRepositoryMongoDB from "../frameworks/database/mongoDB/repositories/customerRepositoryMongoDB.js";

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
  router.route('/:id').get(controller.fetchCustomerById);
  router.route('/').get(controller.fetchAllCustomer);

  //POST ENDPOINTS
  router.route('/').post(controller.addNewCustomer);

  //PUT ENDPOINTS
  router.route('/:id').put(controller.updateCustomerById);

  //DELETE ENDPOINTS
  router.route('/:id').delete(controller.deleteCustomerById);

	return router;
}
