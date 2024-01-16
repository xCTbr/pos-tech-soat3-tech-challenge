import { customer } from '../models/Customer.js';

class CustomerController {
	
	static async listCustomers(req, res) {

		// #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to get all customers.'

		try {
			const customerList = await customer.find();
			res.status(200).json(customerList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getCustomerById(req, res) {
		// #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to get customer by ID.'
		try {
			const id = req.params.id;
			const customerFound = await customer.findById(id);
			res.status(200).json(customerFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getCustomerByCpf(req, res) {
		// #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to get customer by CPF.'
		try {
			const CPF = req.query.CPF;
			const customerCpfFound = await customer.find({'cpf':CPF},{});
			res.status(200).json(customerCpfFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async createCustomer(req, res) {
		// #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to add a customer.'

		/* #swagger.parameters['newCustomer'] = {
               in: 'body',
               description: 'Information customer.',
               required: true,
               schema: { $ref: "#/definitions/AddCustomer" }
        } */
		//schema: { $ref: "#/definitions/AddCustomer" }
		try {
			const newCustomer = await customer.create(req.body);
			res.status(201).json({
				message: 'Customer created successfully',
				customer: newCustomer
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Customer creation failed`
			});
		}
	};

	static async updateCustomer(req, res) {
		// #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to update customer by ID.'

		/* #swagger.parameters['updateCustomer'] = {
               in: 'body',
               description: 'Information customer.',
			   required: true,
               schema: { $ref: "#/definitions/AddCustomer" }
        } */
		try {
			const id = req.params.id;
			await customer.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).json({message: 'Customer updated successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Customer update failed`
			});
		}
	};

	static async deleteCustomer(req, res) {
		// #swagger.tags = ['Customer']
		// #swagger.description = 'Endpoint to delete customer by ID.'
		try {
			const id = req.params.id;
			await customer.findByIdAndDelete(id);
			res.status(200).json({message: 'Customer deleted successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Customer delete failed`
			});
		}
	};
};

export default CustomerController;
