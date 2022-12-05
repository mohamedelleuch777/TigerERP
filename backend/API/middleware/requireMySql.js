const mysql = require("mysql2/promise")

const getDbConnection = async () => {
    return await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user:  process.env.MYSQL_USER,
        password:  process.env.MYSQL_PASSWORD,
        database:  process.env.MYSQL_DB
    });
}



const SQL_Query = async (sql) => {
    const db = await getDbConnection()
    const result = await db.execute(sql)
    return result[0];
}

module.exports = {
    SQL_Query
}