import { category } from '../models/Category.js';

class CategoryController {
	
	static async listCategories(req, res) {
		// #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to list all categories.'
		try {
			const categoryList = await category.find();
			res.status(200).json(categoryList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getCategoryById(req, res) {
		// #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to get category by ID.'
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
		// #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to add category.'

		/* #swagger.parameters['newCategory'] = {
               in: 'body',
               description: 'Information category.',
               required: true,
               schema: { $ref: "#/definitions/AddCategory" }
        } */
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
		// #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to update customer by ID.'

		/* #swagger.parameters['updateCategory'] = {
               in: 'body',
               description: 'Information do category.',
               required: true,
               schema: { $ref: "#/definitions/AddCategory" }
        } */
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
		// #swagger.tags = ['Category']
		// #swagger.description = 'Endpoint to delete category by ID.'
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
