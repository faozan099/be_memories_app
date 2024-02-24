const joi = require("joi");
const { responFailed, responSeccess } = require("../utils/message");
const articles = require("../moduls/article");
const mongoose = require("mongoose");

const articleSchema = joi.object({
  title: joi.string().max(55),
  description: joi.string(),
  user_id: joi.string().required(),
});

const articlePost = async (req, res) => {
  try {
    
    const { error, value } = articleSchema.validate(req.body);

    const { title, description, user_id } = value;
    const existingUserId = await articles.findOne({ user_id });
    if (error || !existingUserId) {
      return responFailed(400, "error || id tidak ditemukan", res);
    }

    if(title === "" && description === ""){
      return responFailed(400, "judul dan deskripsi harus di isi", res)
    }
    const newArticle = new articles({
      title: title,
      description: description,
      user_id: new mongoose.Types.ObjectId(user_id),
    });

    await newArticle.save();
    responSeccess(201, newArticle, "success", res);
  } catch (error) {
    console.log(error);
    return responFailed(500, error.message, res);
  }
};



module.exports = articlePost
