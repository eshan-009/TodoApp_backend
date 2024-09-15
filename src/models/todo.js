const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,
   
    },
    description:{
        type:String,
 
   
    },
    dueDate:{
        type:Date,
        required : true,
   
    },
    completed:{
        type:Boolean,
        required : true,
   
    },

})

module.exports = mongoose.model("Todo",productSchema);