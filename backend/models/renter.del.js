const mongoose = require('mongoose');

const RenterSchema = mongoose.Schema({
	// renterId: {type: Number, required: true},
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true},
	phone: {type: Number, required: true},
	calendarId: {type: Number, required: true},
	paymentId: {type: String, required: true},
    

	creationDate: {type: Date, default: Date.now}
});



module.exports = mongoose.model('renter', RenterSchema);
