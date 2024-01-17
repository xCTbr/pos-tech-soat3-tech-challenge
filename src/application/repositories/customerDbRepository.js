export default function customerRepository(repository) {
  // const findByProperty = (params) => repository.findByProperty(params);
  // const countAll = (params) => repository.countAll(params);
  // const findById = (id) => repository.findById(id);
  const add = (customer) => repository.add(customer);
  // const deleteById = (id) => repository.deleteById(id);

  return {
    // findByProperty,
    // countAll,
    // findById,
    add
    // deleteById
  };
}