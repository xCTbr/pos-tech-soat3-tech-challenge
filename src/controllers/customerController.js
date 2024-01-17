/*import findAll from '../../application/use_cases/post/findAll';
import addPost from '../../application/use_cases/post/add';
import countAll from '../../application/use_cases/post/countAll';
import findById from '../../application/use_cases/post/findById';
import updateById from '../../application/use_cases/post/updateById';
import deletePost from '../../application/use_cases/post/deleteΒyId';*/
import createCustomer from '../use_cases/customer/create.js'

export default function customerController(
  customerDbRepository,
  customerDbRepositoryImpl
) {
  const dbRepository = customerDbRepository(customerDbRepositoryImpl());

  // Fetch all the posts of the logged in user
  // const getAllCustomers = (req, res) => {
  //   const params = {};
  //   const response = {};

  //   params.userId = req.user.id;

  //  getAll(params, dbRepository)
  //     .then((posts) => {
  //       response.posts = posts;
  //       const cachingOptions = {
  //         key: 'posts_',
  //         expireTimeSec: 30,
  //         data: JSON.stringify(posts)
  //       };
  //       // cache the result to redis
  //       cachingRepository.setCache(cachingOptions);
  //       return countAll(params, dbRepository);
  //     })
  //     .then((totalItems) => {
  //       response.totalItems = totalItems;
  //       response.totalPages = Math.ceil(totalItems / params.perPage);
  //       response.itemsPerPage = params.perPage;
  //       return res.json(response);
  //     })
  //     .catch((error) => next(error));
  // };

  // const fetchPostById = (req, res, next) => {
  //   findById(req.params.id, dbRepository)
  //     .then((post) => {
  //       if (!post) {
  //         throw new Error(`No post found with id: ${req.params.id}`);
  //       }
  //       res.json(post);
  //     })
  //     .catch((error) => next(error));
  // };

  const addNewCustomer = (req, res) => {
    const { id, name, cpf, email, phone } = req.body;

    createCustomer({
      name,
      cpf,
      email,
      phone,
      dbRepository
    })
			.then((customer) => {
				return res.json(`Customer created successfully - ${customer}`);
			})//`${error.message} - Customer creation failed`
			.catch((error) => res.json(`${error.message} - Customer creation failed`));
  };

  // const deletePostById = (req, res, next) => {
  //   deletePost(req.params.id, dbRepository)
  //     .then(() => res.json('post sucessfully deleted!'))
  //     .catch((error) => next(error));
  // };

  // const updatePostById = (req, res, next) => {
  //   const { title, description, isPublished } = req.body;

  //   updateById({
  //     id: req.params.id,
  //     title,
  //     description,
  //     userId: req.user.id,
  //     isPublished,
  //     postRepository: dbRepository
  //   })
  //     .then((message) => res.json(message))
  //     .catch((error) => next(error));
  // };

  return {
    addNewCustomer,
  };
}
