import customerController from "../../../controllers/customerController.js";
import customerDbRepository from "../../../application/repositories/customerDbRepository.js"
import customerDbRepositoryMongoDB from "../../db/mongoDB/repositories/customerRepositoryMongoDB.js"
// const routes = express.Router();

// //Rotas da mais especifica para menos especifica, ex: se colocar a chamada de busca de pois de id vai chamar a de id primeiro 
// routes.get("/customer", CustomerController.listCustomers);
// routes.get("/customer/cpf", CustomerController.getCustomerByCpf);
// routes.get("/customer/:id", CustomerController.getCustomerById);
// routes.post("/customer", CustomerController.createCustomer);
// routes.put("/customer/:id", CustomerController.updateCustomer);
// routes.delete("/customer/:id", CustomerController.deleteCustomer);

// export default routes;
export default function customerRouter(express) {
  const router = express.Router();

  // load controller with dependencies
  const controller = customerController(
    customerDbRepository,
    customerDbRepositoryMongoDB,
  );

  // GET enpdpoints
  // router.route('/:id').get(authMiddleware, controller.fetchUserById);
  // router.route('/').get(authMiddleware, controller.fetchUsersByProperty);

  // POST enpdpoints
  router.route('/').post(controller.addNewCustomer);

  return router;
}