const { comparePassword } = require("../bcryptHelper");
const User = require("../models/registerModel");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      const comparePass = comparePassword(password, userExist.password);
      if (comparePass) return res.status(200).json({ message: "login" });
      return res.status(401).json({ message: "email or password is invalid!" });
    }
    return res.status(401).json({ message: "email or password is invalid!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};
module.exports = { login };
