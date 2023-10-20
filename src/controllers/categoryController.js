import { category } from '../models/Category';

class CategoryController {
	
	static async listCategories(req, res) {
		try {
			const categoryList = await category;
			res.status(200).json(categoryList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getCategoryById(req, res) {
		try {
			const id = req.params.id;
			const categoryFound = await category.findById(id);
			res.status(200).json(categoryFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async createCategory(req, res) {
		try {
			const newCategory = await category.create(req.body);
			res.status(201).json({
				message: 'Category created successfully',
				category: newCategory
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Category creation failed`
			});
		}
	};

	static async updateCategory(req, res) {
		try {
			const id = req.params.id;
			await category.findByIdAndUpdate(id, req.body);
			res.status(200).json({message: 'Category updated successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Category update failed`
			});
		}
	};

	static async deleteCategory(req, res) {
		try {
			const id = req.params.id;
			await category.findByIdAndDelete(id);
			res.status(200).json({message: 'Category deleted successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Category delete failed`
			});
		}
	};
};

export default CategoryController;
