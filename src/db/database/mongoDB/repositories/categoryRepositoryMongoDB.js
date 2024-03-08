import CategoryModel from "../models/category.js";
import db from '../../../../config/dbConnectMysql.js';

export default function categoryRepositoryMongoDB() {

	const add = async (categoryEntity) => {
		const newCategory = await CategoryModel({
			categoryName: categoryEntity.getCategoryName(),
			description: categoryEntity.getDescription(),
			createdAt: new Date()
		})
		
		return newCategory.save();
	};

	const findAll = async (params) => {
		return new Promise((resolve, reject) => {
			const select = "SELECT * FROM categories";
			db.query(select, (error, result) => {
				if(error) return reject(error);
        return resolve(result);
			});
		});
	};
    
	const findById = (id) => {
		return new Promise((resolve, reject) => {
			const select = "SELECT * FROM categories WHERE id = ?";
			db.query(select, [id], (error, result) => {
				if(error) return reject(error);
        return resolve(result);
			});
		});
	};

	const deleteById = (id) => {
		return new Promise((resolve, reject) => {
			const select = "DELETE FROM categories WHERE id = ?";
			db.query(select, [id], (error, result) => {
				if(error) return reject(error);
        return resolve(result);
			});
		});
	};
	
	const updateById = (id, categoryEntity) => {
		const categoryName = categoryEntity.getCategoryName();
		const description = categoryEntity.getDescription();
		return new Promise((resolve, reject) => {
			const update = "UPDATE categories SET categoryName=?, catDescription=? WHERE id = ?";
			db.query(update, [categoryName, description, id], (error, result) => {
				if(error) return reject(error);
        return resolve(result);
			});
		});
	};

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById
		
	}
}
