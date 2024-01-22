import { product } from "../models/Product.js";

class ProductController {
	
	static async listProducts(req, res) {
		// #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to get all products.'
		try {
			const productList = await product.find()
			.populate('category','categoryName');
			res.status(200).json(productList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getProductById(req, res) {
		// #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to get product by ID.'
		try {
			const id = req.params.id;
			const productFound = await product.findById(id);
			res.status(200).json(productFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async createProduct(req, res) {
		// #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to add product.'

		/* #swagger.parameters['newProduct'] = {
               in: 'body',
               description: 'Information product.',
               required: true,
               schema: { $ref: "#/definitions/AddProduct" }
        } */
		//schema: { $ref: "#/definitions/AddProduct" }

		try {
			const newProduct = await product.create(req.body);
			res.status(201).json({
				message: 'Product created successfully',
				product: newProduct
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Product creation failed`
			});
		}
	};

	static async updateProduct(req, res) {
		// #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to update product by ID.'

		/* #swagger.parameters['updateProduct'] = {
               in: 'body',
               description: 'Information customer.',
			   required: true,
               schema: { $ref: "#/definitions/AddProduct" }
        } */
		try {
			const id = req.params.id;
			await product.findByIdAndUpdate(id, {$set: req.body});
			res.status(200).json({message: 'Product updated successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Product update failed`
			});
		}
	};

	static async deleteProduct(req, res) {
		// #swagger.tags = ['Product']
		// #swagger.description = 'Endpoint to delete product by ID.'

		try {
			const id = req.params.id;
			await product.findByIdAndDelete(id);
			res.status(200).json({message: 'Product deleted successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Product delete failed`
			});
		}
	};
};

export default ProductController;
