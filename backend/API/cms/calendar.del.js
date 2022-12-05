"use strict";

const Calendar = require('../../models/calendar');


const  getAllCalendars =   async (req, res) => { 
    try {
        const calendarList = await Calendar.find();                                   
        res.json({                            
            success: true,                       
            data: calendarList                                          
        });                                  
    } catch (err) {                                   
        res.json({                           
            success: false,
            message: err                             
        });                                                                                               
    } 
}


const addOneCalendar = async (req, res) => {
    try {
        const newCalendar = new Calendar(req.body);
        const saveResult = await newCalendar.save();
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

const updateOneCalendar = async(req, res)=>{
    try {
		let newObj = {};
		newObj[req.params.field] = req.body.newValue;
        const toUpdate = await Calendar.updateOne(
            { _id: req.params.calendarId},
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

const deleteOneCalendar = async(req, res)=>{
    try {
        const toDelete = await Calendar.deleteOne(
            { _id: req.params.calendarId},
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
    getAllCalendars, 
    addOneCalendar, 
    updateOneCalendar,
    deleteOneCalendar 
}
