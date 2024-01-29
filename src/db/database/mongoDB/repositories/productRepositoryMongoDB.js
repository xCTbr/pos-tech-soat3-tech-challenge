import ProductModel from "../models/product.js";

export default function productRepositoryMongoDB() {

	const add = async (productEntity) => {
	
		console.log('product repository');
		
		const newProduct = await ProductModel({
			productName: productEntity.getProductName(),
			category: productEntity.getCategory(),
			quantity: productEntity.getQuantity(),
			price: productEntity.getPrice(),
			createdAt: new Date()
		})
		
		return newProduct.save();
	};

	const findAll = (params) => ProductModel.find();
    
	const findById = (id) => ProductModel.findById(id);

	const deleteById = (id) => ProductModel.findByIdAndRemove(id);
	
	const updateById = (id, productEntity) => {
		const updatedProduct = {
			productName: productEntity.getProductName(),
			category: productEntity.getCategory(),
			quantity: productEntity.getQuantity(),
			price: productEntity.getPrice(),
			updatedAt: new Date()
		};
	
		return ProductModel.findOneAndUpdate(
		  { _id: id },
		  { $set: updatedProduct },
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
