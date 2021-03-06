const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String
    },
    date:{
        type: Date,
        default: new Date()
    },
    name:{
        type: String,
    }
})

module.exports = mongoose.model('User', userSchema);