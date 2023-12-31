const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: String, // String is shorthand for {type: String}
    email: String,
    password: String,
    role: {
       type:String,
       enum: ['teacher','student', 'parent','admin'],
       default: 'student'
    }
   });
    
   const Users = mongoose.model('Users', userSchema);
   module.exports=Users