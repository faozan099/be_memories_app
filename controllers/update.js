const Joi = require("joi");
const articles = require("../moduls/article");
const { responFailed, responSeccess } = require("../utils/message");

const updateSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
});

const updateArticle = async (req, res) => {
  try {
    const { _id } = req.params;
    const { value, error } = updateSchema.validate(req.body);
    const data = await articles.findOne({ _id });

    if (error) {
      return responFailed(400, error.message, res);
    }

    if(!data){
        return responFailed(400, "id tidak ditemukan", res)
    }

    data.title = value.title
    data.description = value.description


    await data.save();
    responSeccess(201, data, "success", res);
  } catch (error) {
    console.log(error)
    responFailed(500, error.message, res);
  }
};

module.exports = updateArticle;
