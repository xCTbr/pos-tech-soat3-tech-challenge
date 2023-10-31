import { status } from "../models/Status.js";

class StatusController {
	
	static async listStatuss(req, res) {
		// #swagger.tags = ['Order Status']
		// #swagger.description = 'Endpoint to list all Order Status.'
		try {
			const statusList = await status.find();
			res.status(200).json(statusList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getStatusById(req, res) {
		// #swagger.tags = ['Order Status']
		// #swagger.description = 'Endpoint to list all Order Status by ID.'
		try {
			const id = req.params.id;
			const statusFound = await status.findById(id);
			res.status(200).json(statusFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async createStatus(req, res) {

		// #swagger.tags = ['Order Status']
		// #swagger.description = 'Endpoint to create Order Status.'

		/* #swagger.parameters['createOrderStatus'] = {
               in: 'body',
               description: 'Information order.',
			   required: true,
               schema: { $ref: "#/definitions/AddOrderStatus" }
        } */
		try {
			const newStatus = await status.create(req.body);
			res.status(201).json({
				message: 'Status created successfully',
				status: newStatus
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Status creation failed`
			});
		}
	};

	static async updateStatus(req, res) {
		// #swagger.tags = ['Order Status']
		// #swagger.description = 'Endpoint to update Order Status.'

		/* #swagger.parameters['createOrderStatus'] = {
               in: 'body',
               description: 'Information order.',
			   required: true,
               schema: { $ref: "#/definitions/AddOrderStatus" }
        } */
		try {
			const id = req.params.id;
			await status.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).json({message: 'Status updated successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Status update failed`
			});
		}
	};

	static async deleteStatus(req, res) {
		// #swagger.tags = ['Order Status']
		// #swagger.description = 'Endpoint to delete Order Status.'
		try {
			const id = req.params.id;
			await status.findByIdAndDelete(id);
			res.status(200).json({message: 'Status deleted successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Status delete failed`
			});
		}
	};
};

export default StatusController;
