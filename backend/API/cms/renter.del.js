"use strict";

const Renter = require('../../models/renter');


const  getAllRenters =   async (req, res) => { 
    try {
        const renterList = await Renter.find();                                   
        res.json({                            
            success: true,                       
            data: renterList                                          
        });                                  
    } catch (err) {                                   
        res.json({                           
            success: false,
            message: err                             
        });                                                                                               
    } 
}

const addOneRenter = async (req, res) => {
    try {
        const newRenter = new Renter(req.body);
        const saveResult = await newRenter.save();
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

const updateOneRenter = async(req, res)=>{
    try {
		let newObj = {};
		newObj[req.params.field] = req.body.newValue;
        const toUpdate = await Renter.updateOne(
            { _id: req.params.renterId},
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

const deleteOneRenter = async(req, res)=>{
    try {
        const toDelete = await Renter.deleteOne(
            { _id: req.params.renterId},
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




module.exports = { 
    getAllRenters, 
    addOneRenter, 
    updateOneRenter,
    deleteOneRenter 
}
