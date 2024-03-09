import db from '../../../../config/dbConnectMysql.js';
export default function customerRepositoryMySqlDB() {

	const add = async (customerEntity) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const insertQuery = "INSERT INTO customers (name, cpf, email, phone, createdAt) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)";
				db.query(insertQuery, [customerEntity.getName(), customerEntity.getCpf(), customerEntity.getEmail(), customerEntity.getPhone()], (error, result) => {
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
						const nameCustomer = customerEntity.getName();
						const cpf = customerEntity.getCpf();
						const email = customerEntity.getEmail();
						const phone = customerEntity.getPhone();
						return resolve({ "Customer added ": insertId, "Name ": nameCustomer, "CPF": cpf, "Email": email, "Phone": phone });
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
	
				const select = "SELECT * FROM customers";
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
	
				const select = "SELECT * FROM customers WHERE id = ?";
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
	

	const findByCPF = (cpf) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "SELECT * FROM customers WHERE cpf = ?";
				db.query(select, [cpf], (queryError, result) => {
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


	const deleteById = (id) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "DELETE FROM customers WHERE id = ?";
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


	  const updateById = (id, customerEntity) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const updateQuery = "UPDATE customers SET name=?, cpf=?, email=?, phone=?, updatedAt=CURRENT_TIMESTAMP WHERE id=?";
				db.query(updateQuery, [customerEntity.getName(), customerEntity.getCpf(), customerEntity.getEmail(), customerEntity.getPhone(), id], (error, result) => {
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
	
						const nameCustomer = customerEntity.getName();
						const cpf = customerEntity.getCpf();
						const email = customerEntity.getEmail();
						const phone = customerEntity.getPhone();
						const rowUpdate = result.affectedRows;
						let retorno = "Customer updated";
	
						if (rowUpdate === 0) {
							retorno = "Customer not found";
							return resolve({ retorno, rowUpdate });
						}
	
						return resolve({ response: retorno, rowUpdate, "Name ": nameCustomer, "CPF": cpf, "Email": email, "Phone": phone  });
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
		findByCPF
		
	}
}
