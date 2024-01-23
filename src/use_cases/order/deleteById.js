export default function deleteById(id, orderRepository) {
    return orderRepository.findById(id).then((order) => {
      //console.log('String(order)')
      if (!order || String(order) === 'null') {
        //throw new Error(`No order found with id: ${id}`);
        return Promise.resolve(`No order found with id: ${id}`);
      }
      return orderRepository.deleteById(id);
    });
  }