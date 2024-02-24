const articles = require("../moduls/article")
const { responFailed, responSeccess } = require("../utils/message")

const detailArticle = async(req, res) => {
    try {
        const {_id} = req.params
        const dataDetail = await articles.findOne({_id})

        if(!dataDetail){
            return responFailed(400, "Article tidak ditemukan", "success", res)
        }

        responSeccess(200, dataDetail, "success", res)
    } catch (error) {
        console.log(error)
        responFailed(500, error.message, res)
    }
}

const articleList = async(req, res) => {
    try {
        const data = await articles.find({})
        if(data === 0 && !data){
            return responSeccess(200, "data kosong atau error", "success", res)
        }

        responSeccess(200, data, "success", res)
    } catch (error) {
        responFailed(500, error.message, res)
    }
}

module.exports = {detailArticle, articleList}