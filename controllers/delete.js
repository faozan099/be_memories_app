const articles = require("../moduls/article")
const { responFailed, responSeccess } = require("../utils/message")

const deleteArticle = async(req, res) => {
    try {
        const {_id} = req.params
        const deleted = await articles.findOne({_id})
        if(!_id){
            return responFailed(400, "id tidak valid", res)
        }
        responSeccess(200, deleted, "success", res)
    } catch (error) {
        responFailed(500, error.message, res)
    }
}

module.exports = deleteArticle