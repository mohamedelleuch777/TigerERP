"use strict";
var SHA256 = require("crypto-js/sha256");
const jwt = require('jsonwebtoken');
require('dotenv/config');

const CmsUser = require('../../models/cms_users');

const  cms_login =   async (req, res) => { 
    const data = req.query;
    const hashedPassword= await SHA256(data.password).toString();
    try {
        const userList = await CmsUser.findOne({
            email: data.email,
            password: hashedPassword
        });
        if(!userList) {
            res.json({                           
                success: false,
                message: "please check email/password combination"                             
            });    
            return;
        }
        const newObject = JSON.parse(JSON.stringify(userList));
        delete newObject.password;
        const token = jwt.sign(newObject, process.env.JWT_SECRET, {expiresIn: '7d'});
        res.json({                            
            success: true,  
            token: token,                     
            data: newObject                                          
        });                                  
    } catch (err) {                                   
        res.json({                           
            success: false,
            message: err                             
        });                                                                                               
    } 
}


const cms_register = async (req, res) => {
    const hashedPassword= await SHA256(req.body.password).toString();
    try {
        req.body.password = hashedPassword;
        const newRoom = new CmsUser(req.body);
        const saveResult = await newRoom.save();
        saveResult.password = ""; // remove password before sending back the data to the client
        res.json({
            success: true,
            data: saveResult
        });
    } catch (err) {
        res.json({
            success: false,
            message: err
        });
    }
};

const cms_updateOneUser = async(req, res)=>{
    try {
		let newObj = {};
		newObj[req.params.field] = req.body.newValue;
        const toUpdate = await CmsUser.updateOne(
            { _id: req.params.authId},
            //{ $set: {req.params.filed: req.body.name}}
            { $set: newObj}
			
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

const cms_deleteOneUser = async(req, res)=>{
    try {
        const toDelete = await CmsUser.deleteOne(
            { _id: req.params.authId},
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








const  cms_getAllAuth =   async (req, res) => { 
    try {
        const users = await CmsUser.find();                                   
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
    cms_login,
    cms_register,
    cms_updateOneUser,
    cms_deleteOneUser,


    cms_getAllAuth
}
