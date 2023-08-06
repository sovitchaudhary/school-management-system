const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String, // String is shorthand for {type: String}
    lastName: String,
    email: String,
    password: String,
    role: {
       type:String,
       enum: ['teacher','student','admin'],
       default: 'student'
    }
   });
    
   const Users = mongoose.model('Users', userSchema);
   module.exports=Users