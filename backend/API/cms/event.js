"use strict";

const Event = require('../../models/events');


const  getAllEvents =   async (req, res) => { 
    try {
        const eventList = await Event.find();                                   
        res.json({                            
            success: true,                       
            data: eventList                                          
        });                                  
    } catch (err) {                                   
        res.json({                           
            success: false,
            message: err                             
        });                                                                                               
    } 
}

const addOneEvent = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const saveResult = await newEvent.save();
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

const updateOneEvent = async(req, res)=>{
    try {
		let newObj = {};
		newObj[req.params.field] = req.body.newValue;
        const toUpdate = await Event.updateOne(
            { _id: req.params.eventId},
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

const deleteOneEvent = async(req, res)=>{
    try {
        const toDelete = await Event.deleteOne(
            { _id: req.params.eventId},
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
    getAllEvents, 
    addOneEvent, 
    updateOneEvent,
    deleteOneEvent 
}
