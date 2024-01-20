export default function deleteById(id, custumerRepository) {
    return custumerRepository.findById(id).then((custumer) => {
      if (!custumer) {
        throw new Error(`No custumer found with id: ${id}`);
      }
      return custumerRepository.deleteById(id);
    });
  }