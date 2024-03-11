import db from '../../../../config/dbConnectMysql.js';

export default function productRepositoryMySqlDB() {

	const add = async (productEntity) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const insertQuery = "INSERT INTO product (productName, category_id, quantity, price, createdAt) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)";
				db.query(insertQuery, [productEntity.getProductName(), productEntity.getCategory(),productEntity.getQuantity(),productEntity.getPrice()], (error, result) => {
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
	
	
						const insertId = result.insertId;
						const product = productEntity.getProductName();
						const category = productEntity.getCategory();
						const quantity = productEntity.getQuantity();
						const price = productEntity.getPrice();
						return resolve({ "Product added ": insertId, "Product ": product, "Quantity": quantity, "Price": price, "Category ID": category });
					});
				});
			});
		});
	};

    
	const findAll = async (params) => {
		return new Promise((resolve, reject) => {

			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "SELECT * FROM product";
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


	const findById = (id) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "SELECT * FROM product WHERE id = ?";
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
						resolve(...result);
					});
				});
			});
		});
	};


	const deleteById = (id) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "DELETE FROM product WHERE id = ?";
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

	  const updateById = (id, productEntity) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const updateQuery = "UPDATE product SET productName=?, category_id=?, quantity=?, price=?, updatedAt=CURRENT_TIMESTAMP WHERE id=?";
				db.query(updateQuery, [productEntity.getProductName(), productEntity.getCategory(), productEntity.getQuantity(), productEntity.getPrice(), id], (error, result) => {
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
	
						const nameProduct = productEntity.getProductName();
						const category = productEntity.getCategory();
						const quantity = productEntity.getQuantity();
						const price = productEntity.getPrice();
						const rowUpdate = result.affectedRows;
						let retorno = "Category updated";
	
						if (rowUpdate === 0) {
							retorno = "Product not found";
							return resolve({ retorno, rowUpdate });
						}
	
						return resolve({ response: retorno, rowUpdate, "Product ": nameProduct, "Quantity": quantity, "Price": price, "Category ID": category });
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
		deleteById
		
	}
}
