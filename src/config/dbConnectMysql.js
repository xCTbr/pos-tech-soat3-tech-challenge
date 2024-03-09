import mysql from "mysql2";

const connectDatabaseMySql = mysql.createConnection({
	host: process.env.DB_RDS_HOST,
	user: process.env.DB_RDS_USER,
	password: process.env.DB_RDS_PASS,
	database: process.env.DB_RDS_DATABASE_NAME
})

connectDatabaseMySql.connect(function (err) { 
	if (err) {
		console.log(err)
	} else {
		console.log('conectado');
	}
})

export default connectDatabaseMySql;
