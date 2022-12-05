"use strict";
var SHA256 = require("crypto-js/sha256");
const jwt = require('jsonwebtoken');
require('dotenv/config');

// const User = require('../../models/users');

const  login =   async (req, res) => { 
    const data = req.body;
    const hashedPassword= await SHA256(data.password).toString();
    try {
        const userList = await User.findOne({
            email: data.email,
            password: hashedPassword
        });
        if(!userList) {
            throw new Error("Invalid Credentials, Please check your email/password and try again")
        }
        const newObject = JSON.parse(JSON.stringify(userList));
        delete newObject.password;
        const token = jwt.sign(newObject, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.json({
            result: token,
            result_message: {
                type: "success",
                title: "Success",
                message: "User logged in successfully"
            }
        });                                 
    } catch (err) {
        res.json({
            result: null,
            result_message: {
                type: "error",
                message: "something went wrong, please try again later",
                title: "Error",
                privateBackend: {
                    type:  "BadRequestError",
                    message: err._message ? err._message : err.message,
                    title: "Bad request"
                }
            }
        });
    }
}


const register = async (req, res) => {
    const data = req.body;
    const hashedPassword= await SHA256(data.password).toString();
    try {
        const userExist = await User.findOne({
            email: data.email
        });
        if(userExist) {
            throw new Error("Email already exists")
        }
        req.body.password = hashedPassword;
        const newUser = new User(data);
        const saveResult = await newUser.save();
        const userList = await User.findOne({
            email: data.email
        });
        const newObject = JSON.parse(JSON.stringify(userList));
        delete newObject.password;
        const token = jwt.sign(newObject, process.env.JWT_SECRET, {expiresIn: '7d'});
        saveResult.password = ""; // remove password before sending back the data to the client
        userList.password = ""; // remove password before sending back the data to the client
        res.json({
            result: token,
            result_message: {
                type: "success",
                title: "Success",
                message: "Account created Successfully"
            }
        });
    } catch (err) {
        res.json({
            result: null,
            result_message: {
                type: "error",
                message: "something went wrong, please try again later",
                title: "Error",
                privateBackend: {
                    type:  "BadRequestError",
                    message: err._message ? err._message : err.message,
                    title: "Bad request"
                }
            }
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
        const users = await User.find();                                   
        res.json({                            
            success: true,                       
            data: users                                          
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