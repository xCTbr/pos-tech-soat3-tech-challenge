import useCaseCreate from '../use_cases/status/add.js'
import useCasegetAll from '../use_cases/status/getAll.js'
import useCaseFindById from '../use_cases/status/findById.js';
import useCasedelete from '../use_cases/status/deleteById.js'
import useCaseUpdateById from '../use_cases/status/updateById.js';

export default function statusController() {
  
	const addNewStatus = (req, res, next) => {
		console.log('controller status');
    //console.log('repositorio-> ',dbRepository);
		//console.log('Request body:', req.body);
    const {description} = req.body;
	//console.log('reqbody',req.body);
    useCaseCreate(
      description,
      Date(),
      Date()
    )
    .then((status) => res.json(status))
    .catch((error) => res.json(next(`${error.message} - Status creation failed`)));
		/*.then((status) => {
			return res.json('Status created successfully');
		})
		.catch((error) => res.json(`${error.message} - Status creation failed`));*/
  };

  const fetchStatusById = (req, res, next) => {
    //console.log('params by id-> ',req.params.id);
    //console.log('repository -> ',dbRepository);
    useCaseFindById(req.params.id)
      .then((status) => {
        if (!status) {
          //throw new Error(`No status found with id: ${req.params.id}`);
          res.json(`No status found with id: ${req.params.id}`);
        }
        res.json(status);
      })
      .catch((error) => next(error));
  };

  const fetchAllStatus = (req, res, next) => {
    useCasegetAll()
      .then((status) => {
        if (!status) {
          //throw new Error(`No statuss found with id: ${req.params.id}`);
          res.json(`No status found`);
        }
        res.json(status);
      })
      .catch((error) => next(error));
  };

  const deleteStatusById = (req, res, next) => {
    useCasedelete(req.params.id)
      .then(() => res.json('Status sucessfully deleted!'))
      .catch((error) => next(error));
  };
  
  const updateStatusById = (req, res, next) => {
    const {description} = req.body;

    //console.log('controller update by id->',dbRepository);
    useCaseUpdateById(
      req.params.id,

      description,
      Date()
    )
      .then((message) => res.json(message))
      .catch((error) => next(error));
      
  };
  //console.log('Controller final',dbRepository);
  return {
	addNewStatus,
    fetchAllStatus,
    fetchStatusById,
    updateStatusById,
    deleteStatusById
  };
}