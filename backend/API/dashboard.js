"use strict";
require('dotenv/config');
const mysql = require("mysql2")

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user:  process.env.MYSQL_USER,
    password:  process.env.MYSQL_PASSWORD,
    database:  process.env.MYSQL_DB
});

const getDashboard = async(req, res)=>{
    try {
        res.json({
            "top_bar": {
                "logo": {
                    "name": "Logo",
                    "width": 300  ,
                    "height": 60  ,
                    "url":"/assets/img/logo.png"
                },
                "title": "Tiger Erp",
                "style": {
        
                },
                "right_block":{
                    "btn1":  "login" ,
                    "btn2": "Logout" 
                }
            },
            "menu": [
                {
                    "label": "Client Management", 
                    "child": [
                        {
                            "label": "Client Management",
                            "url": "/client"
                        }
                    ]
                },
                {
                    "label": "Supplier Management", 
                    "child": [
                        {
                            "label":"Supplier Management",
                            "url": "/Supplier"
                            
                        }
                    ]
                },
                {
                    "label": "Product Management", 
                    "child": [
                        {
                            "label": "Product Management",
                            "url": "/product"
                        },
                        {
                            "label": "Stock Management",
                            "url": "/stock"
                        }
                    ]
                },
                {
                    "label": "User Management",
                    "child":[
                        {
                            "label": "Add User",
                            "url": "/user"
                        },
                        {
                            "label": "Edit User",
                            "url": "/user"
                        },
                        {
                            "label": "Delete User",
                            "url": "/user"
                        }
                    ]
                }
            ],
            "background": {
                "name": "background",
                "width": 300  ,
                "height": 60  ,
                "url":"/assets/img/background-dachbord.png"
            }
        } )

    } catch (err) {
        res.json({
            success: false,
            message: err._message ? err._message : err.message
        });
    }
}


module.exports = {
    getDashboard
}

