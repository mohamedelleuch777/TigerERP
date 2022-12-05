const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
	// actionId: {type: Number, required: true},
	eventName: {type: String, required: true},
	eventState: {type: Boolean, required: true},
	eventPicture: {type: String, required: true},
	speaker: {type: String, required: true},
	applicationStartDate: {type: Date, required: true},
	applicationEndDate: {type: Date, required: true},
	eventStartDate: {type: Date, required: true},
	eventEndDate: {type: Date, required: true},
	eventSubject: {type: String, required: true},
	eventDescription: {type: String, required: true},
	eventCost: {type: String, required: true},
	roomId: {type: String, required: true},
	userId: {type: String, required: true},


	creationDate: {type: Date, default: Date.now}
});



module.exports = mongoose.model('event', EventSchema);
