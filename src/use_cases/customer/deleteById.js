export default function deleteById(id, custumerRepository) {
    return custumerRepository.findById(id).then((custumer) => {
      //console.log('String(custumer)')
      if (!custumer || String(custumer) === 'null') {
        //throw new Error(`No custumer found with id: ${id}`);
        return Promise.resolve(`No custumer found with id: ${id}`);
      }
      return custumerRepository.deleteById(id);
    });
  }