"use strict";
var SHA256 = require("crypto-js/sha256");
const jwt = require('jsonwebtoken');
require('dotenv/config');
const { SQL_Query } = require('./middleware/requireMySql');

const  login =   async (req, res) => { 
    const data = req.body;
    const hashedPassword= await SHA256(data.password).toString();
    try {
        const sql_code = `SELECT * FROM \`User\` WHERE \`Username\`='${data.username}' AND \`Password\`='${hashedPassword}'`;
        const user = await SQL_Query(sql_code);
        if(user.length===0) {
            throw new Error("Invalid Credentials, Please check your email/password and try again")
        }
        const userObj = user[0];
        delete userObj.Password;
        const token = jwt.sign(userObj, process.env.JWT_SECRET, {expiresIn: process.env.TOKEN_EXPIRE});
        res.json({
            success: true,
            message: "User logged in successfully",
            token: token
        });                                 
    } catch (err) {
        res.json({
            success: false,
            message: err._message ? err._message : err.message
        });
    }
}


const register = async (req, res) => {
    const data = req.body;
    const hashedPassword= await SHA256(data.password).toString();
    try {
        req.body.password = hashedPassword;
        const newUser = req.body;
        if(!newUser.username) {
            throw new Error("username is missing")
        }
        else if(!newUser.password) {
            throw new Error("password is missing")
        }
        else if(!newUser.worker_id) {
            throw new Error("worker_id is missing")
        }




        const sql_code = `INSERT INTO \`User\` (\`Id\`,\`Password\`,\`Username\`,\`WorkerId\`)  
                          VALUES(NULL,'${newUser.password}','${newUser.username}',${newUser.worker_id})      `;
        const result = await SQL_Query(sql_code);
        if(result.affectedRows===0) {
            throw new Error("Unknown error occured. User was not added.")
        }

        const newUserObject = {
            id: result.insertId,
            username: newUser.username,
            worker_id: newUser.worker_id
        }
        const token = jwt.sign(newUserObject, process.env.JWT_SECRET, {expiresIn: process.env.TOKEN_EXPIRE});
        res.json({
            success: true,
            message: "Account created Successfully",
            token: token
        });
    } catch (err) {
        res.json({
            success: false,
            message: err._message ? err._message : err.message
        });
    }
};

const updateOneUser = async(req, res)=>{
    try {
        // protect password ************
        delete req.body.password;
        // *****************************
        const userId = req.decodeToken._id;
        const toUpdate = await User.updateOne(
            { _id: userId},
            { $set: req.body}
        )
		res.json({
			success: true,
			data: toUpdate
		});
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

}

const deleteOneUser = async(req, res)=>{
    try {
        const userId = req.decodeToken._id;
        const toDelete = await User.deleteOne(
            { _id: userId},
        )
		res.json({
			success: true,
			data: toDelete
		});
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

}








const  getAllUser =   async (req, res) => { // only for test purposes
    try {
        const sql_code = `SELECT * FROM \`User\``;
        const userList = await SQL_Query(sql_code);                                 
        res.json({                            
            success: true,                       
            data: userList                                          
        });                                  
    } catch (err) {                                   
        res.json({                           
            success: false,
            message: err                             
        });                                                                                               
    } 
}




module.exports = { 
    login,
    register,
    updateOneUser,
    deleteOneUser,


    getAllUser
}


function updateJsObject(A, B) {
    let temp = Object.keys(B);
    for(let i=0; i<temp.length; i++) {
        let x = temp[i];
        A[x] = B[x];
    }
}