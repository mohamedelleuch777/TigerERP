const mongoose = require('mongoose');

const CmsUserSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    tckn: {type: Number, required: false},
    phone: {type: String, required: false},
    creationDate: {type: Date, default: Date.now}
});



module.exports = mongoose.model('cms_users', CmsUserSchema);
