const mongoose = require('mongoose')

const favoriteSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        reff: "users"
    },
    article_id: {
        type: mongoose.Schema.Types.ObjectId,
        reff: "articles"
    }
})

const favorites = mongoose.model("favorites", favoriteSchema)

module.exports = favorites