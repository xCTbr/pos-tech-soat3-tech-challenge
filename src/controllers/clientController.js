import { client } from '../models/Client';

class ClientController {
	
	static async listClients(req, res) {
		try {
			const clientList = await client;
			res.status(200).json(clientList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getClientById(req, res) {
		try {
			const id = req.params.id;
			const clientFound = await client.findById(id);
			res.status(200).json(clientFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async createClient(req, res) {
		try {
			const newClient = await client.create(req.body);
			res.status(201).json({
				message: 'Customer created successfully',
				client: newClient
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Customer creation failed`
			});
		}
	};

	static async updateClient(req, res) {
		try {
			const id = req.params.id;
			await client.findByIdAndUpdate(id, req.body);
			res.status(200).json({message: 'Customer updated successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Customer update failed`
			});
		}
	};

	static async deleteClient(req, res) {
		try {
			const id = req.params.id;
			await client.findByIdAndDelete(id);
			res.status(200).json({message: 'Customer deleted successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Customer delete failed`
			});
		}
	};
};

export default ClientController;
