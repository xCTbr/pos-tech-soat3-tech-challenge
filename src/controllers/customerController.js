import useCaseCreate from '../use_cases/customer/add.js'
import useCaseGetAll from '../use_cases/customer/getAll.js'
import useCasefindById from '../use_cases/customer/findById.js';
import useCasedelete from '../use_cases/customer/deleteById.js'
import useCaseupdateById from '../use_cases/customer/updateById.js';
import useCasefindByCPF from '../use_cases/customer/findByCPF.js'

export default function customerController() {
  
//  const dbRepository = customerRepository(customerRepositoryMongoDB());

console.log('controller customer')
  
  const fetchAllCustomer = (req, res, next) => {
    useCaseGetAll()
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

    useCaseCreate(
			name,
      cpf,
      email,
      phone,
      Date(),
      Date()
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
    useCasefindById(req.params.id)
      .then((customer) => {
        if (!customer) {
          //throw new Error(`No customer found with id: ${req.params.id}`);
          res.json(`No customer found with id: ${req.params.id}`);
        }
        res.json(customer);
      })
      .catch((error) => next(error));
  };

  const fetchCustomerByCPF = (req, res, next) => {
    //console.log('params by id-> ',req.body);
    //return res.json('fdsfa');
    //console.log('repository -> ',dbRepository);
    //const cpf = req.query.cpf;
    //req.params.cpf
    console.log('cpf----->',req.params.cpf)
    useCasefindByCPF(req.params.cpf)
      .then((customer) => {
        if (!customer) {
          //throw new Error(`No customer found with id: ${req.params.id}`);
          res.json(`No customer found with cpf: ${req.params.cpf}`);
        }
        res.json(customer);
      })
      .catch((error) => next(res.json(error)));
  };


  const deleteCustomerById = (req, res, next) => {
    useCasedelete(req.params.id)
      .then(() => res.json('Customer sucessfully deleted!'))
      .catch((error) => next(error));
  };
  
  const updateCustomerById = (req, res, next) => {
    const {name, cpf, email, phone, skype } = req.body;

    //console.log('controller update by id->',dbRepository);
    useCaseupdateById(
      req.params.id,
      name,
      cpf,
      email,
      phone,
			skype,
      Date()
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
    deleteCustomerById,
    fetchCustomerByCPF
  };
}