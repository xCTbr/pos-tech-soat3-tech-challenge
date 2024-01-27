import usecaseCreate from '../use_cases/product/add.js'
import useCasegetAll from '../use_cases/product/getAll.js'
import useCasefindById from '../use_cases/product/findById.js';
import useCaseDelete from '../use_cases/product/deleteById.js'
import useCaseUpdateById from '../use_cases/product/updateById.js';

export default function productController() {
  
	const addNewProduct = (req, res, next) => {
		console.log('controller product');
    //console.log('repositorio-> ',dbRepository);
		//console.log('Request body:', req.body);
    const { productName, category, quantity, price } = req.body;

    usecaseCreate(
			productName,
      category,
      quantity,
      price,
      Date(),
      Date()
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
    useCasefindById(req.params.id)
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
    useCasegetAll()
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
    useCaseDelete(req.params.id)
      .then(() => res.json('Product sucessfully deleted!'))
      .catch((error) => next(error));
  };
  
  const updateProductById = (req, res, next) => {
    const {productName, category, quantity, price} = req.body;

    //console.log('controller update by id->',dbRepository);
    useCaseUpdateById(
      req.params.id,
      productName,
      category,
      quantity,
      price,
      Date()
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