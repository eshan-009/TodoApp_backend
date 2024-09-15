const Todo = require("../models/todo");

async function updateTodoStatus(req,res) {
    try{
        const {id} = req.params;
        const {completed} = req.body
       
        if(typeof(completed)!=="boolean")
        {
            return res.status("Please Provide completed Status")
        }
       const productData =  await Todo.findById({_id:id});
    
    if(!productData)
    {
        return res.json({
            message:"Could Not find Product"
        })
    }

    productData.completed = true;

    productData.save();

        return res.status(200).json({
            message: " completed status updated Successfully",
            data : productData
        })
       }
       catch (err)
       {
        return res.status(500).json({
            message:"Error updating completed status Poduct",
            error : err
        })
       }
}

module.exports = {updateTodoStatus}