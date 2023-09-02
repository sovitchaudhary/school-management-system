const Users = require("../models/users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const registerNewUser = async (req, res) => {
  // email already exits
  const matched = await Users.exists({ email: req.body.email });
  if (matched) {
    res.status(409).json({
      msg: "Email already exits",
    });
  } else {
    //encrypt the password
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword
    await Users.create(req.body);
    res.status(201).json({
      msg: "User Created Successfully",
    });
  }
};

const loginUser = async(req,res)=>{
  console.log(req.body)
  //req.body --> email, password
  const data = await Users.findOne({email: req.body.email}).lean()
  if (data) {
    const isMatched = await bcrypt.compare(req.body.password, data.password)
    if (isMatched) {
      const {password, ...userDetails} = data
      //token generating logic
      const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
      res.json({
        success: true,
        token,
        userDetails
      })
    } else {
      res.json({
        success: false,
        msg: "Incorrect login credentials"
      })
    }
  } else {
    res.json({
      success: false,
      msg: "No User Found"
    })
  }
  
}

module.exports = { registerNewUser, loginUser };
