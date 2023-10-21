import { product } from "../models/Product.js";

class ProductController {
	
	static async listProducts(req, res) {
		try {
			const productList = await product.find();
			res.status(200).json(productList);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Request failed`
			});
		}
	};

	static async getProductById(req, res) {
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
		try {
			const id = req.params.id;
			await product.findByIdAndUpdate(id, req.body);
			res.status(200).json({message: 'Product updated successfully'});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - Product update failed`
			});
		}
	};

	static async deleteProduct(req, res) {
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
