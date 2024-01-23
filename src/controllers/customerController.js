import createCustomer from '../use_cases/customer/add.js'
import getAllCustomers from '../use_cases/customer/getAll.js'
import findById from '../use_cases/customer/findById.js';
import deleteCustomer from '../use_cases/customer/deleteById.js'
import updateById from '../use_cases/customer/updateById.js';

export default function customerController(
  customerRepository,
  customerRepositoryMongoDB,
) {
  //const dbRepository = customerRepository(customerRepositoryMongoDB());
  const dbRepository = customerRepository(customerRepositoryMongoDB());

  
  const fetchAllCustomer = (req, res, next) => {
    getAllCustomers(dbRepository)
      .then((customer) => {
        if (!customer) {
          //throw new Error(`No customers found with id: ${req.params.id}`);
          res.json(`No customer found`);
        }
        res.json(customer);
      })
      .catch((error) => next(error));
  };


	const addNewCustomer = (req, res, next) => {
		console.log('controler customer');
    //console.log('repositorio-> ',dbRepository);
		//console.log('Request body:', req.body);
    const { name, cpf, email, phone, skype } = req.body;

    createCustomer(
			name,
      cpf,
      email,
      phone,
			skype,
      Date(),
      Date(),
      dbRepository
    )
    .then((customer) => res.json(customer))
    .catch((error) => res.json(next(`${error.message} - Customer creation failed`)));
		/*.then((customer) => {
			return res.json('Customer created successfully');
		})
		.catch((error) => res.json(`${error.message} - Customer creation failed`));*/
  };

  const fetchCustomerById = (req, res, next) => {
    //console.log('params by id-> ',req.params.id);
    //console.log('repository -> ',dbRepository);
    findById(req.params.id, dbRepository)
      .then((customer) => {
        if (!customer) {
          //throw new Error(`No customer found with id: ${req.params.id}`);
          res.json(`No customer found with id: ${req.params.id}`);
        }
        res.json(customer);
      })
      .catch((error) => next(error));
  };


  const deleteCustomerById = (req, res, next) => {
    deleteCustomer(req.params.id, dbRepository)
      .then(() => res.json('Customer sucessfully deleted!'))
      .catch((error) => next(error));
  };
  
  const updateCustomerById = (req, res, next) => {
    const {name, cpf, email, phone, skype } = req.body;

    //console.log('controller update by id->',dbRepository);
    updateById(
      req.params.id,
      name,
      cpf,
      email,
      phone,
			skype,
      Date(),
      dbRepository
    )
      .then((message) => res.json(message))
      .catch((error) => next(error));
      
  };
  //console.log('Controller final',dbRepository);
  return {
		addNewCustomer,
    fetchAllCustomer,
    fetchCustomerById,
    updateCustomerById,
    deleteCustomerById
  };
}