const Product = require("../models/todo");
const User = require("../models/user");

async function getTodo(req,res) {

try{
    const {id} = req.params;
    const {userData} =req.body
   
    if(id)
    {
        const product = await Product.findById({_id:id});
        return res.status(200).json({
            message:"Todo fetched successfully",
            data : product
        })
    }
   
    // const user = await User.findById(userData,{todos:true}).populate("todos")
   const user =  await User.findById(userData).select("todos").populate('todos');
 
    // const products = await Product.find()
    return res.status(200).json({
        message:"Todo fetched successfully",
        data : user.todos
    })
}
catch (err){
    return res.status(500).json({
        message: "Error Fetching Todo Data",
        error : err
    })
}

}

module.exports = {getTodo}