import StatusModel from "../models/status.js";

export default function statusRepositoryMongoDB() {

	const add = async (statusEntity) => {
	
		console.log('status repository');
		
		const newStatus = await StatusModel({
			//statusName: statusEntity.getStatusName(),
			description: statusEntity.getDescription(),
			createdAt: new Date()
		})
		
		return newStatus.save();
	};

	const findAll = (params) => StatusModel.find();
    
	const findById = (id) => StatusModel.findById(id);

	const deleteById = (id) => StatusModel.findByIdAndRemove(id);
	
	const updateById = (id, statusEntity) => {
		const updatedStatus = {
			//statusName: statusEntity.getStatusName(),
			description: statusEntity.getDescription(),
			updatedAt: new Date()
		};
	
		return StatusModel.findOneAndUpdate(
		  { _id: id },
		  { $set: updatedStatus },
		  { new: true }
		);
	  };

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById
		
	}
}
