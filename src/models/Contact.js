const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const isUUID = require('validator/lib/isUUID');

const Schema = mongoose.Schema;

const contactSchema = new Schema({

    userId: {
        type: String,
        unique: false,
        required: true,
    },
    name: {
        type: String,
        unique: false,
        required: true,
    },
    company: {
        type: String,
        unique: false,
        required: true,
    },
    phone: {
        type: String,
        unique: false,
        required: true,
    },
    email: {
        type: String,
        unique: false,
        required: false,
        validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }],
    },

}, { timestamps: true });

mongoose.model('Contact', contactSchema);

module.exports = mongoose.model('Contact');