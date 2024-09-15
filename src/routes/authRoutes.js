const express = require("express");
const router = express.Router();
const {signup,login} = require("../controllers/Auth");
const { auth } = require("../middleware/auth");

router.post("/signup",signup)
router.post("/login",login)
router.get("/authh",auth,(req,res)=>{
   return res.status(200).json({
        success :true,
        message:"Authentication Successful"
    });
})


module.exports = router