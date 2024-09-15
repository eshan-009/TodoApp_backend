const User = require("../models/user")
const jwt = require("jsonwebtoken")
require("dotenv").config();


const auth = async(req,res,next)=>{

try{
    const token = req.cookies.token || req.header("Authorization").replace("Bearer ","")
   
if(token)
{

    const decode =  await jwt.verify(token,process.env.jwt_secret)
    req.body.userData = decode.payload;
}
else
{
    return res.status(400).json({
        message:"This is a protected Path"
    })
}
next()

}
catch (err)
{
    return res.status(500).json({
        message : "Error Accessing protected Path",
        error:err
    })
}
}





module.exports = {auth}