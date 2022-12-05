"use strict";

const Room = require('../../models/room');


const  getAllRooms =   async (req, res) => { 
    try {
        const roomList = await Room.find();                                   
        res.json({                            
            success: true,                       
            data: roomList                                          
        });                                  
    } catch (err) {                                   
        res.json({                           
            success: false,
            message: err                             
        });                                                                                               
    } 
}


const addOneRoom = async (req, res) => {
    try {
        const newRoom = new Room({
            //buildingId: buildingList.length+1,
            roomName: req.body.roomName,
            buildingId: req.body.buildingId,
            capacity: req.body.capacity,
            airConditionner: req.body.airConditionner,
            facade: req.body.facade,
            cafeeService: req.body.cafeeService,
            television: req.body.television,
            internetConnection: req.body.internetConnection,
            desctiption: req.body.desctiption,
            cost: req.body.cost
        });
        const saveResult = await newRoom.save();
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

const updateOneRoom = async(req, res)=>{
    try {
		let newObj = {};
		newObj[req.params.field] = req.body.newValue;
        const toUpdate = await Room.updateOne(
            { _id: req.params.roomId},
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

const deleteOneRoom = async(req, res)=>{
    try {
        const toDelete = await Room.deleteOne(
            { _id: req.params.roomId},
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
    getAllRooms, 
    addOneRoom, 
    updateOneRoom,
    deleteOneRoom 
}
