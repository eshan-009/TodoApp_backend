const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
    },
    email:{
        type :String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    todos :{
        type : [mongoose.Types.ObjectId]
    }
})

module.exports =  mongoose.model("user",userSchema);