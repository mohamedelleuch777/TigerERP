"use strict";
require('dotenv/config');
const { debug } = require('console');
const mysql = require("mysql2");
const { SQL_Query } = require('./middleware/requireMySql');

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user:  process.env.MYSQL_USER,
    password:  process.env.MYSQL_PASSWORD,
    database:  process.env.MYSQL_DB
});

const NUMBER_OF_CLIENTS_PER_PAGE                = 10;

const getClientsList = async(req, res)=>{
    try {
        const body = req.body;
        const sql_code = `SELECT * FROM \`Client\` LIMIT ${NUMBER_OF_CLIENTS_PER_PAGE} OFFSET ${parseInt(body.pageIndex)*NUMBER_OF_CLIENTS_PER_PAGE}`;
        const clients = await SQL_Query(sql_code);
        res.json({
            success: true,
            data: clients
        })

    } catch (err) {
        res.json({
            success: false,
            message: err._message ? err._message : err.message
        });
    }
}


module.exports = {
    getClientsList
}

