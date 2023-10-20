import { customer } from '../models/Customer';

class CustomerController {
	
	static async listCustomers(req, res) {
		try {
			const customerList = await customer;
			res.status(200).json(customerList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getCustomerById(req, res) {
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

	static async createCustomer(req, res) {
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
		try {
			const id = req.params.id;
			await customer.findByIdAndUpdate(id, req.body);
			res.status(200).json({message: 'Customer updated successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Customer update failed`
			});
		}
	};

	static async deleteCustomer(req, res) {
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
