import useCaseCreate from '../use_cases/category/add.js'
import useCasegetAll from '../use_cases/category/getAll.js'
import useCaseFindById from '../use_cases/category/findById.js';
import useCasedelete from '../use_cases/category/deleteById.js'
import useCaseUpdateById from '../use_cases/category/updateById.js';

export default function categoryController() {
  
	const addNewCategory = (req, res, next) => {
		console.log('controller category');
    const { categoryName, description } = req.body;

    useCaseCreate(
			categoryName,
      description,
      Date(),
      Date()
    )
    .then((category) => res.json(category))
    .catch((error) => res.json(next(`${error.message} - Category creation failed`)));
  };

  const fetchCategoryById = (req, res, next) => {
    useCaseFindById(req.params.id)
      .then((category) => {
        if (!category) {
          res.json(`No category found with id: ${req.params.id}`);
        }
        res.json(category);
      })
      .catch((error) => next(error));
  };

  const fetchAllCategory = (req, res, next) => {
    useCasegetAll()
      .then((category) => {
        if (!category) {
          res.json(`No category found`);
        }
        res.json(category);
      })
      .catch((error) => next(error));
  };

  const deleteCategoryById = (req, res, next) => {
    useCasedelete(req.params.id)
      .then(() => res.json('Category sucessfully deleted!'))
      .catch((error) => next(error));
  };
  
  const updateCategoryById = (req, res, next) => {
    const {categoryName, description} = req.body;

    // console.log('controller update by id->',dbRepository);
    useCaseUpdateById(
      req.params.id,
      categoryName,
      description,
      Date()
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