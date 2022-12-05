const mongoose = require('mongoose');

const BuildingSchema = mongoose.Schema({
	// buildingId: {type: Number, required: true},
    buildingName: {type: String, required: true},
    buildingPicture: {type: String, required: true},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
    description: {type: String, required: true},
	creationDate: {type: Date, default: Date.now}
});



module.exports = mongoose.model('building', BuildingSchema);
