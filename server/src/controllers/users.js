const Users =require('../models/users')
const registerNewUser = async(req, res) => {
    console.log(req.body)
    await Users.create(req.body);
    res.json({
      msg: "success",
    });
  };
  module.exports = {registerNewUser}