const joi = require("joi");
const { responFailed, responSeccess } = require("../utils/message");
const users = require("../moduls/user");

const registerSchema = joi.object({
  name: joi.string().max(55).required(),
  password: joi.string().required(),
});

const register = async (req, res) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) {
      return responFailed(400, error.message, res);
    }
    const { name, password } = value;
    const existingUsername = await users.findOne({ name });
    if (existingUsername && password === "") {
      return responFailed(400, error.message, res);
    }

    const newUser = new users({
      name: name,
      password: password,
    });

    newUser.save()

    responSeccess(201, newUser, "success", res);
  } catch (error) {
    responFailed(500, error.message, res);
  }
};

module.exports = register;
