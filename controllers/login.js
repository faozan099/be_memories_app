const joi = require("joi");
const { responFailed, responSeccess } = require("../utils/message");
const users = require("../moduls/user");

const loginSchema = joi.object({
  name: joi.string().max(55).required(),
  password: joi.string().required(),
});

const login = async (req, res) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) {
      return responFailed(400, error.message, res);
    }

    const { name, password } = value;
    const matchName = await users.findOne({ name });
    const matchPassword = await users.findOne({ password });

    if (!matchName || !matchPassword) {
      return responFailed(400, "data tidak ditemukan", res);
    }

    responSeccess(200, matchPassword, "success", res);
  } catch (error) {
    console.log(error);
    responFailed(500, error.message, res);
  }
};

module.exports = login;
