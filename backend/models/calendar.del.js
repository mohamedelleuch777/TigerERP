const mongoose = require('mongoose');

const CalendarSchema = mongoose.Schema({
	// calendarId: {type: Number, required: true},
	roomId: {type: String, required: true}, // concerned room for this specific event
	date: {type: Date, required: true},
	startTime: {type: Number, required: true}, // timestamp
	endTime: {type: Number, required: true}, // timestamp
	status: {type: String, required: true},
    creationDate: {type: Date, default: Date.now}
});



module.exports = mongoose.model('calendar', CalendarSchema);
