const mongoose = require("mongoose");
require("dotenv").config()
const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("DB Connected"))
    .catch(()=>console.log("Error Connecting to DB"))
}

module.exports = dbConnect;