const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },

    pwd: {
        type: String,
        required: true
    }

})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel