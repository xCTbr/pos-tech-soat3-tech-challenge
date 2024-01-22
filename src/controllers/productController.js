import createProduct from '../use_cases/product/add.js'
import getAllCategories from '../use_cases/product/getAll.js'
import findById from '../use_cases/product/findById.js';
import deleteProduct from '../use_cases/product/deleteById.js'
import updateById from '../use_cases/product/updateById.js';

export default function productController(
  productRepository,
  productRepositoryMongoDB,
) {
  //const dbRepository = productRepository(productRepositoryMongoDB());
  const dbRepository = productRepository(productRepositoryMongoDB());

  
	const addNewProduct = (req, res, next) => {
		console.log('controller product');
    //console.log('repositorio-> ',dbRepository);
		//console.log('Request body:', req.body);
    const { productName, category, quantity, price } = req.body;

    createProduct(
			productName,
      category,
      quantity,
      price,
      Date(),
      Date(),
      dbRepository
    )
    .then((product) => res.json(product))
    .catch((error) => res.json(next(`${error.message} - Product creation failed`)));
		/*.then((product) => {
			return res.json('Product created successfully');
		})
		.catch((error) => res.json(`${error.message} - Product creation failed`));*/
  };

  const fetchProductById = (req, res, next) => {
    //console.log('params by id-> ',req.params.id);
    //console.log('repository -> ',dbRepository);
    findById(req.params.id, dbRepository)
      .then((product) => {
        if (!product) {
          //throw new Error(`No product found with id: ${req.params.id}`);
          res.json(`No product found with id: ${req.params.id}`);
        }
        res.json(product);
      })
      .catch((error) => next(error));
  };

  const fetchAllProduct = (req, res, next) => {
    getAllCategories( dbRepository)
      .then((product) => {
        if (!product) {
          //throw new Error(`No products found with id: ${req.params.id}`);
          res.json(`No product found`);
        }
        res.json(product);
      })
      .catch((error) => next(error));
  };

  const deleteProductById = (req, res, next) => {
    deleteProduct(req.params.id, dbRepository)
      .then(() => res.json('Product sucessfully deleted!'))
      .catch((error) => next(error));
  };
  
  const updateProductById = (req, res, next) => {
    const {productName, category, quantity, price} = req.body;

    //console.log('controller update by id->',dbRepository);
    updateById(
      req.params.id,
      productName,
      category,
      quantity,
      price,
      Date(),
      dbRepository
    )
      .then((message) => res.json(message))
      .catch((error) => next(error));
      
  };
  //console.log('Controller final',dbRepository);
  return {
		addNewProduct,
    fetchAllProduct,
    fetchProductById,
    updateProductById,
    deleteProductById
  };
}