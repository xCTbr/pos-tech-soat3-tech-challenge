import db from '../../../../config/dbConnectMysql.js';

export default function statusRepositoryMySqlDB() {

	const add = async (statusEntity) => {
		console.log("descricao",statusEntity.getDescription())
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
				
				const insertQuery = "INSERT INTO statusorder (statusName, description, createdAt) VALUES (?, ?, CURRENT_TIMESTAMP)";
				db.query(insertQuery, [statusEntity.getDescription(), statusEntity.getDescription()], (error, result) => {
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
						const nameStatus = statusEntity.getDescription();
						const description = statusEntity.getDescription();
						return resolve({ "Status added ": insertId, "Description": description });
					});
				});
			});
		});
	};

	//const findAll = (params) => StatusModel.find();
	const findAll = async (params) => {
		return new Promise((resolve, reject) => {

			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "SELECT * FROM statusorder";
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
    
	//const findById = (id) => StatusModel.findById(id);
	const findById = (id) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "SELECT * FROM statusorder WHERE id = ?";
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
	//const deleteById = (id) => StatusModel.findByIdAndRemove(id);
	const deleteById = (id) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const select = "DELETE FROM statusorder WHERE id = ?";
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
	/*const updateById = (id, statusEntity) => {
		const updatedStatus = {
			//statusName: statusEntity.getStatusName(),
			description: statusEntity.getDescription(),
			updatedAt: new Date()
		};
	
		return StatusModel.findOneAndUpdate(
		  { _id: id },
		  { $set: updatedStatus },
		  { new: true }
		);
	  };*/
	  const updateById = (id, statusEntity) => {
		return new Promise((resolve, reject) => {
			// Begin transaction
			db.beginTransaction((beginError) => {
				if (beginError) {
					return reject(beginError);
				}
	
				const updateQuery = "UPDATE statusorder SET description=?, statusName=?, updatedAt=CURRENT_TIMESTAMP WHERE id=?";
				db.query(updateQuery, [ statusEntity.getDescription(), statusEntity.getDescription(), id], (error, result) => {
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

	return {
		findById,
		findAll,
		add,
		updateById,
		deleteById
		
	}
}
