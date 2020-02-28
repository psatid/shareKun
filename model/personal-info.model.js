const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personalInfoSchema = new Schema({
    username: {type: String, required: true},
    address: {type: String, required: true},
    age: {type: Number, required: true},
    birthDate: {type: Date, required: true},
    nationalID: {type: String, required: true},
    university: {type: String, required: true},
    yearOfStudy: {type: Number, required: true},
    phoneNumber: {type: String, required: true},
    sex: {type: String, required: true}
}, {
    timestamps: true,
});

const PersonalInfo = mongoose.model('Personal-Info', personalInfoSchema);

module.exports = PersonalInfo;