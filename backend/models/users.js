const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    clientType: {type: String, required: true},
    tckn: {type: Number, required: true},
	taxNumber: {type: String, required: true},
    taxAdministration: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    favorites: {type: String, required: false},
    creationDate: {type: Date, default: Date.now}
});



module.exports = mongoose.model('users', UserSchema);
