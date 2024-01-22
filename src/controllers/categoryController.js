import createCategory from '../use_cases/category/add.js'
import getAllCategories from '../use_cases/category/getAll.js'
import findById from '../use_cases/category/findById.js';
import deleteCategory from '../use_cases/category/deleteById.js'
import updateById from '../use_cases/category/updateById.js';

export default function categoryController(
  categoryRepository,
  categoryRepositoryMongoDB,
) {
  //const dbRepository = categoryRepository(categoryRepositoryMongoDB());
  const dbRepository = categoryRepository(categoryRepositoryMongoDB());

  
	const addNewCategory = (req, res, next) => {
		console.log('controller category');
    //console.log('repositorio-> ',dbRepository);
		//console.log('Request body:', req.body);
    const { categoryName, description } = req.body;

    createCategory(
			categoryName,
      description,
      Date(),
      Date(),
      dbRepository
    )
    .then((category) => res.json(category))
    .catch((error) => res.json(next(`${error.message} - Category creation failed`)));
		/*.then((category) => {
			return res.json('Category created successfully');
		})
		.catch((error) => res.json(`${error.message} - Category creation failed`));*/
  };

  const fetchCategoryById = (req, res, next) => {
    //console.log('params by id-> ',req.params.id);
    //console.log('repository -> ',dbRepository);
    findById(req.params.id, dbRepository)
      .then((category) => {
        if (!category) {
          //throw new Error(`No category found with id: ${req.params.id}`);
          res.json(`No category found with id: ${req.params.id}`);
        }
        res.json(category);
      })
      .catch((error) => next(error));
  };

  const fetchAllCategory = (req, res, next) => {
    getAllCategories( dbRepository)
      .then((category) => {
        if (!category) {
          //throw new Error(`No categorys found with id: ${req.params.id}`);
          res.json(`No category found`);
        }
        res.json(category);
      })
      .catch((error) => next(error));
  };

  const deleteCategoryById = (req, res, next) => {
    deleteCategory(req.params.id, dbRepository)
      .then(() => res.json('Category sucessfully deleted!'))
      .catch((error) => next(error));
  };
  
  const updateCategoryById = (req, res, next) => {
    const {categoryName, description} = req.body;

    //console.log('controller update by id->',dbRepository);
    updateById(
      req.params.id,
      categoryName,
      description,
      Date(),
      dbRepository
    )
      .then((message) => res.json(message))
      .catch((error) => next(error));
      
  };
  //console.log('Controller final',dbRepository);
  return {
		addNewCategory,
    fetchAllCategory,
    fetchCategoryById,
    updateCategoryById,
    deleteCategoryById
  };
}