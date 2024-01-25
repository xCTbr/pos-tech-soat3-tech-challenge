import useCaseCreate from '../use_cases/category/add.js'
import useCasegetAll from '../use_cases/category/getAll.js'
import useCaseFindById from '../use_cases/category/findById.js';
import useCasedelete from '../use_cases/category/deleteById.js'
import useCaseUpdateById from '../use_cases/category/updateById.js';

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

    useCaseCreate(
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
    useCaseFindById(req.params.id, dbRepository)
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
    useCasegetAll( dbRepository)
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
    useCasedelete(req.params.id, dbRepository)
      .then(() => res.json('Category sucessfully deleted!'))
      .catch((error) => next(error));
  };
  
  const updateCategoryById = (req, res, next) => {
    const {categoryName, description} = req.body;

    //console.log('controller update by id->',dbRepository);
    useCaseUpdateById(
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