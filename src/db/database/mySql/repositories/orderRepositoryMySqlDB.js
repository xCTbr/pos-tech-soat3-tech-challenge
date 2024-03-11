import db from '../../../../config/dbConnectMysql.js';

export default function orderRepositoryMongoDB() {
	const add = async (orderEntity) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
				//console.log("order entry",orderEntity.getCustomer())
				const insertQuery = "INSERT INTO orders (orderNumber, customer_id, totalOrderPrice, orderStatus_id, createdAt) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)";
				const orderProducts = orderEntity.getOrderProductsDescription().map(product => [product.productId, product.productQuantity]);
	
				// Insert order details
				db.query(insertQuery, [orderEntity.getOrderNumber(), orderEntity.getCustomer(), orderEntity.getTotalOrderPrice(), orderEntity.getOrderStatus()], (error, result) => {
					if (error) {
						// Rollback the transaction if there is an error
						return db.rollback(() => reject(error));
					}
	
					const orderId = result.insertId;
	
					// Insert order products
					const insertProductQuery = "INSERT INTO orderProductsdescription (orderId, productId, productQuantity) VALUES ?";
					db.query(insertProductQuery, [orderProducts.map(product => [orderId, ...product])], (productError) => {
						if (productError) {
							// Rollback the transaction if there is an error
							return db.rollback(() => reject(productError));
						}
	
						// Commit the transaction and close the connection
						db.commit((commitError) => {
							if (commitError) {
								// Rollback the transaction if there is an error during commit
								return db.rollback(() => reject(commitError));
							}
	
	
							// Resolve with the order details
							resolve({ orderId, ...orderEntity });
						});
					});
				});
			});
		});
	};
	/*const findAll = (params) => OrderModel.find().populate('orderStatus').populate('customer');*/
	//const findAll = (params) => StatusModel.find();
	const findAll = async (params) => {
		return new Promise((resolve, reject) => {

			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "SELECT * FROM orders order by 1 asc";
				db.query(select, (queryError, result) => {
					if (queryError) {
						// Rollback the transaction if there is an error
						return db.rollback(() => reject(queryError));
					}
	
					// Commit the transaction and close the connection
					db.commit((commitError) => {
						if (commitError) {
							// Rollback the transaction if there is an error during commit
							return db.rollback(() => reject(commitError));
						}
	
						// Resolve with the query result
						resolve(result);
					});
				});
			});
		});
	};
    
	//const findById = (id) => OrderModel.findById(id).populate('orderStatus').populate('customer');
	const findById = (id) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "SELECT * FROM orders WHERE id = ?";
				db.query(select, [id], (queryError, result) => {
					if (queryError) {
						// Rollback the transaction if there is an error
						return db.rollback(() => reject(queryError));
					}
	
					// Commit the transaction and close the connection
					db.commit((commitError) => {
						if (commitError) {
							// Rollback the transaction if there is an error during commit
							return db.rollback(() => reject(commitError));
						}
	
						// Resolve with the query result
						resolve(result);
					});
				});
			});
		});
	};

	//const deleteById = (id) => OrderModel.findByIdAndRemove(id);
	const deleteById = (id) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "DELETE FROM ordersproductsdescription WHERE orderId = ?; DELETE FROM orders WHERE id = ?";
				db.query(select, [id, id], (queryError, result) => {
					if (queryError) {
						// Rollback the transaction if there is an error
						return db.rollback(() => reject(queryError));
					}
	
					// Commit the transaction and close the connection
					db.commit((commitError) => {
						if (commitError) {
							// Rollback the transaction if there is an error during commit
							return db.rollback(() => reject(commitError));
						}
						// Resolve with the query result
						resolve(result);
					});
				});
			});
		});
	};

	const updateById = (id, orderEntity) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const updateQuery = "UPDATE orders SET orderNumber=?, customer_id=?, totalOrderPrice=?, orderStatus_id, updatedAt=CURRENT_TIMESTAMP WHERE id=?";
				db.query(updateQuery, [ orderEntity.getOrderNumber(), orderEntity.getCustomer(),orderEntity.getTotalOrderPrice(), orderEntity.getOrderStatus(), id], (error, result) => {
					if (error) {
						// Rollback the transaction if there is an error
						return db.rollback(() => reject(error));
					}
	
					// Commit the transaction and close the connection
					db.commit((commitError) => {
						if (commitError) {
							// Rollback the transaction if there is an error during commit
							return db.rollback(() => reject(commitError));
						}
	
						//const nameStatus = statusEntity.getStatusName();
						const description = statusEntity.getDescription();
						const rowUpdate = result.affectedRows;
						let retorno = "Status Order updated";
	
						if (rowUpdate === 0) {
							retorno = "Status Order not found";
							return resolve({ retorno, rowUpdate });
						}
	
						return resolve({ response: retorno, rowUpdate, "Description": description });
					});
				});
			});
		});
	};

	const updateStatusById = (id, status) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const updateQuery = "UPDATE orders SET orderStatus_id=?, updatedAt=CURRENT_TIMESTAMP WHERE id=?";
				db.query(updateQuery, [status, id], (error, result) => {
					if (error) {
						// Rollback the transaction if there is an error
						return db.rollback(() => reject(error));
					}
	
					// Commit the transaction and close the connection
					db.commit((commitError) => {
						if (commitError) {
							// Rollback the transaction if there is an error during commit
							return db.rollback(() => reject(commitError));
						}
	
						const rowUpdate = result.affectedRows;
						let retorno = "Order updated";
	
						if (rowUpdate === 0) {
							retorno = "Order not found";
							return resolve({ retorno, rowUpdate });
						}
	
						return resolve({ response: retorno, rowUpdate });
					});
				});
			});
		});
	};

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById,
		updateStatusById		
	}
}
