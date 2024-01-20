import createCustomer from '../use_cases/customer/add.js'
import getAllCustomers from '../use_cases/customer/getAll.js'

export default function customerController(
  customerRepository,
  customerRepositoryMongoDB,
) {
  const dbRepository = customerRepository(customerRepositoryMongoDB());

	const addNewCustomer = (req, res) => {
		console.log('controler');
		console.log(req.body);
    const { name, cpf, email, phone, skype } = req.body;

    createCustomer({
			name,
      cpf,
      email,
      phone,
			skype,
      dbRepository
    })
		.then((customer) => {
			return res.json('Customer created successfully');
		})
		.catch((error) => res.json(`${error.message} - Customer creation failed`));
  };

  /*const fetchCustomerById = (req, res, next) => {
    findById(req.params.id, dbRepository)
      .then((post) => {
        if (!post) {
          throw new Error(`No post found with id: ${req.params.id}`);
        }
        res.json(post);
      })
      .catch((error) => next(error));
  };*/

  const fetchAllCustomer = (req, res, next) => {
    getAllCustomers( dbRepository)
      .then((post) => {
        if (!post) {
          throw new Error(`No post found with id: ${req.params.id}`);
        }
        res.json(post);
      })
      .catch((error) => next(error));
  };
  
  return {
		addNewCustomer,
    fetchAllCustomer
  };
}