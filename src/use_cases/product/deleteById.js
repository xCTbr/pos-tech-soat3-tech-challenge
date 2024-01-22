export default function deleteById(id, productRepository) {
    return productRepository.findById(id).then((product) => {
      //console.log('String(product)')
      if (!product || String(product) === 'null') {
        //throw new Error(`No product found with id: ${id}`);
        return Promise.resolve(`No product found with id: ${id}`);
      }
      return productRepository.deleteById(id);
    });
  }