const Users =require('../models/users')
const registerNewUser = async(req, res) => {
  // email already exits
  const matched = await Users.exists({ email: req.body.email });
  if (matched) {
    res.status(409).json({
      msg: 'Email already exits',
    });
  } else {
    await Users.create(req.body);
    res.status(201).json({
      msg: 'User Created Successfully',
    });
  }
  };
  module.exports = {registerNewUser}