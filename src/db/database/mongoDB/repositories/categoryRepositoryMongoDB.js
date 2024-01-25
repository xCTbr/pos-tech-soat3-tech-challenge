import CategoryModel from "../models/category.js";

export default function categoryRepositoryMongoDB() {

	const add = async (categoryEntity) => {
	
		console.log('category repository');
		
		const newCategory = await CategoryModel({
			categoryName: categoryEntity.getCategoryName(),
			description: categoryEntity.getDescription(),
			createdAt: new Date()
		})
		
		return newCategory.save();
	};

	const findAll = (params) => CategoryModel.find();
    
	const findById = (id) => CategoryModel.findById(id);

	const deleteById = (id) => CategoryModel.findByIdAndRemove(id);
	
	const updateById = (id, categoryEntity) => {
		const updatedCategory = {
			categoryName: categoryEntity.getCategoryName(),
			description: categoryEntity.getDescription(),
			updatedAt: new Date()
		};
	
		return CategoryModel.findOneAndUpdate(
		  { _id: id },
		  { $set: updatedCategory },
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
