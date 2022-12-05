const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
	//roomId: {type: Number, required: true},
    roomName: {type: String, required: true},
    buildingId: {type: String, required: true},
    roomPicture: {type: String, required: false},
    capacity: {type: Number, required: true},
    airConditionner: {type: Boolean, required: true},
    facade: {type: String, required: true},
    cafeeService: {type: Boolean, required: true}, 
    television: {type: Boolean, required: true}, 
    internetConnection: {type: Boolean, required: true}, 
    desctiption: {type: String, required: true}, 
    cost: {type: Number, required: true}, 
	creationDate: {type: Date, default: Date.now}
});



module.exports = mongoose.model('room',RoomSchema);
