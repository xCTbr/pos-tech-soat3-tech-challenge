import db from '../../../../config/dbConnectMysql.js';

export default function categoryRepositoryMySqlDB() {

	const add = async (categoryEntity) => {
			return new Promise((resolve, reject) => {
				const insertQuery = "INSERT INTO categories (categoryName, description, createdAt) VALUES (?, ?, CURRENT_TIMESTAMP)";
				db.query(insertQuery, [categoryEntity.getCategoryName(), categoryEntity.getDescription()], (error, result) => {
					if (error) {
						return reject(error);
					}
					const insertId = result.insertId;
					const nameCategory = categoryEntity.getCategoryName();
					const description = categoryEntity.getDescription();
            		return resolve({ "Category added ":insertId,"Category ":nameCategory,"Description":description});
				});
			});
	};
	

	const findAll = async (params) => {
		return new Promise((resolve, reject) => {
			const select = "SELECT * FROM categories";
			db.query(select, (error, result) => {
				if(error) return reject(error);
        return resolve(result);
			});
		});
	};
    
	const findById = (id) => {
		return new Promise((resolve, reject) => {
			const select = "SELECT * FROM categories WHERE id = ?";
			db.query(select, [id], (error, result) => {
				if(error) return reject(error);
        return resolve(result);
			});
		});
	};

	const deleteById = (id) => {
		return new Promise((resolve, reject) => {
			const select = "DELETE FROM categories WHERE id = ?";
			db.query(select, [id], (error, result) => {
				if(error) return reject(error);
        return resolve(result);
			});
		});
	};
	
	const updateById = (id, categoryEntity) => {
		return new Promise((resolve, reject) => {
			const updateQuery = "UPDATE categories SET description=?, categoryName=?, updatedAt=CURRENT_TIMESTAMP WHERE id=?";
			db.query(updateQuery, [categoryEntity.getCategoryName(), categoryEntity.getDescription(), id], (error, result) => {
				if (error) {
					return reject(error);
				}
				
				const nameCategory = categoryEntity.getCategoryName();
				const description = categoryEntity.getDescription();
				const rowUpdate = result.affectedRows;
				var retorno = "Category updated";
				if(rowUpdate == 0){
					
					retorno ="Category not found";
					return resolve({ retorno, rowUpdate});
				}
				return resolve({ "response":retorno, rowUpdate,"Category ":nameCategory,"Description":description});
				//return resolve(result);
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
