const mongoose = require('mongoose')

const article = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
},
{
    timestamps: true
})

const articles = mongoose.model("articles", article)

module.exports = articles