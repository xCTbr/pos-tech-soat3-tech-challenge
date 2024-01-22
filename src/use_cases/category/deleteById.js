export default function deleteById(id, categoryRepository) {
    return categoryRepository.findById(id).then((category) => {
      //console.log('String(custumer)')
      if (!category || String(category) === 'null') {
        //throw new Error(`No custumer found with id: ${id}`);
        return Promise.resolve(`No category found with id: ${id}`);
      }
      return categoryRepository.deleteById(id);
    });
  }