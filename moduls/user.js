const mongoose = require('mongoose')

const loginRegister = mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    }
})

const users = mongoose.model("users", loginRegister)

module.exports = users